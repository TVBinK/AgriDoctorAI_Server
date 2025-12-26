#!/usr/bin/env python3
"""
Pre-processing script để detect và crop lá từ ảnh toàn bộ cây
Sử dụng YOLO Detection để detect lá, sau đó crop và trả về ảnh lá
"""

import sys
import json
import os
import cv2
import numpy as np
from pathlib import Path
from ultralytics import YOLO

# Đường dẫn đến YOLO detection model (nếu có model detect lá)
# Hoặc sử dụng segmentation để detect vùng lá
LEAF_DETECTION_MODEL = None  # Có thể train model riêng để detect lá

def detect_leaves_opencv(image_path):
    """
    Sử dụng OpenCV để detect lá dựa trên màu sắc và hình dạng
    Phương pháp đơn giản, không cần model riêng
    """
    try:
        # Đọc ảnh
        img = cv2.imread(image_path)
        if img is None:
            return None
        
        # Chuyển sang HSV để dễ detect màu xanh lá
        hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
        
        # Tạo mask cho màu xanh lá (lá cây thường có màu xanh)
        # Range cho màu xanh lá trong HSV
        lower_green = np.array([35, 40, 40])
        upper_green = np.array([85, 255, 255])
        mask = cv2.inRange(hsv, lower_green, upper_green)
        
        # Morphological operations để làm sạch mask
        kernel = np.ones((5, 5), np.uint8)
        mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)
        mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)
        
        # Tìm contours (đường viền) của các vùng lá
        contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        
        if len(contours) == 0:
            return None
        
        # Tìm contour lớn nhất (có thể là lá hoặc nhóm lá)
        largest_contour = max(contours, key=cv2.contourArea)
        
        # Lấy bounding box
        x, y, w, h = cv2.boundingRect(largest_contour)
        
        # Mở rộng bounding box một chút để đảm bảo có đủ context
        padding = 20
        x = max(0, x - padding)
        y = max(0, y - padding)
        w = min(img.shape[1] - x, w + 2 * padding)
        h = min(img.shape[0] - y, h + 2 * padding)
        
        # Crop ảnh
        cropped = img[y:y+h, x:x+w]
        
        return cropped
        
    except Exception as e:
        print(f"Error in detect_leaves_opencv: {e}", file=sys.stderr)
        return None

def detect_leaves_smart_crop(image_path):
    """
    Phương pháp thông minh hơn: 
    - Nếu ảnh có nhiều vùng xanh (toàn bộ cây) -> crop vùng lá
    - Nếu ảnh đã là ảnh lá -> trả về nguyên ảnh
    """
    try:
        img = cv2.imread(image_path)
        if img is None:
            return None
        
        h, w = img.shape[:2]
        
        # Chuyển sang HSV
        hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
        
        # Tạo mask cho màu xanh lá
        lower_green = np.array([35, 40, 40])
        upper_green = np.array([85, 255, 255])
        mask = cv2.inRange(hsv, lower_green, upper_green)
        
        # Tính tỷ lệ pixel xanh trong ảnh
        green_ratio = np.sum(mask > 0) / (h * w)
        
        # Nếu tỷ lệ xanh < 30% -> có thể đã là ảnh lá hoặc ảnh không phù hợp
        # Nếu tỷ lệ xanh > 60% -> có thể là ảnh toàn bộ cây, cần crop
        if green_ratio < 0.3:
            # Có thể đã là ảnh lá, trả về nguyên ảnh
            return img
        
        # Tìm contours
        contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        
        if len(contours) == 0:
            return img  # Trả về nguyên ảnh nếu không detect được
        
        # Tìm các vùng lá lớn (có thể có nhiều lá)
        leaf_areas = []
        for contour in contours:
            area = cv2.contourArea(contour)
            if area > 1000:  # Chỉ lấy vùng lớn hơn 1000 pixels
                x, y, w, h = cv2.boundingRect(contour)
                leaf_areas.append((x, y, w, h, area))
        
        if len(leaf_areas) == 0:
            return img
        
        # Sắp xếp theo diện tích, lấy vùng lớn nhất
        leaf_areas.sort(key=lambda x: x[4], reverse=True)
        x, y, w, h, _ = leaf_areas[0]
        
        # Mở rộng bounding box
        padding = 30
        x = max(0, x - padding)
        y = max(0, y - padding)
        w = min(img.shape[1] - x, w + 2 * padding)
        h = min(img.shape[0] - y, h + 2 * padding)
        
        # Crop ảnh
        cropped = img[y:y+h, x:x+w]
        
        return cropped
        
    except Exception as e:
        print(f"Error in detect_leaves_smart_crop: {e}", file=sys.stderr)
        return None

def preprocess_image(image_path, output_path=None):
    """
    Pre-process ảnh: detect và crop lá từ ảnh toàn bộ cây
    """
    try:
        # Kiểm tra file tồn tại
        if not os.path.exists(image_path):
            return {
                "success": False,
                "error": f"Image file not found: {image_path}"
            }
        
        # Detect và crop lá
        cropped_img = detect_leaves_smart_crop(image_path)
        
        if cropped_img is None:
            return {
                "success": False,
                "error": "Could not detect leaves in image"
            }
        
        # Lưu ảnh đã crop (nếu có output_path)
        if output_path:
            cv2.imwrite(output_path, cropped_img)
            return {
                "success": True,
                "cropped_image": output_path,
                "original_image": image_path
            }
        else:
            # Trả về ảnh dưới dạng base64 hoặc lưu tạm
            # Tạo file tạm
            temp_dir = os.path.join(os.path.dirname(image_path), 'cropped')
            os.makedirs(temp_dir, exist_ok=True)
            
            temp_path = os.path.join(temp_dir, f"cropped_{os.path.basename(image_path)}")
            cv2.imwrite(temp_path, cropped_img)
            
            return {
                "success": True,
                "cropped_image": temp_path,
                "original_image": image_path
            }
            
    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

def main():
    """Main function"""
    if len(sys.argv) < 2:
        result = {
            "success": False,
            "error": "Usage: python preprocess_image.py <image_path> [output_path]"
        }
        print(json.dumps(result))
        sys.exit(1)
    
    image_path = sys.argv[1]
    output_path = sys.argv[2] if len(sys.argv) > 2 else None
    
    # Pre-process ảnh
    result = preprocess_image(image_path, output_path)
    
    # In kết quả JSON
    print(json.dumps(result, ensure_ascii=False))
    
    # Exit với code 0 nếu success, 1 nếu lỗi
    sys.exit(0 if result.get("success", False) else 1)

if __name__ == "__main__":
    main()

