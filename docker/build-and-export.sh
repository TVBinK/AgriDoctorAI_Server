#!/bin/bash
# Script Bash để build và export Docker image trên Linux/Mac
# Sử dụng: chmod +x docker/build-and-export.sh && ./docker/build-and-export.sh
# Hoặc: cd docker && chmod +x build-and-export.sh && ./build-and-export.sh

# Đảm bảo chạy từ root directory của project
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$ROOT_DIR"

echo "========================================"
echo "  Build và Export Docker Image"
echo "========================================"
echo ""

# Kiểm tra Docker đang chạy
echo "[1/4] Kiểm tra Docker..."
if ! docker info > /dev/null 2>&1; then
    echo "✗ Docker không chạy! Vui lòng khởi động Docker"
    exit 1
fi
echo "✓ Docker đang chạy"

# Build image
echo ""
echo "[2/4] Đang build Docker image..."
echo "   (Lần đầu có thể mất 15-30 phút)"
docker-compose -f docker/docker-compose.yml build api-server

if [ $? -ne 0 ]; then
    echo "✗ Build thất bại!"
    exit 1
fi

echo "✓ Build thành công"

# Export image
echo ""
echo "[3/4] Đang export image thành file .tar..."
echo "   (File có thể rất lớn, 2-5GB)"

IMAGE_NAME="plant-disease-api:latest"
OUTPUT_FILE="plant-disease-api.tar"

docker save $IMAGE_NAME -o $OUTPUT_FILE

if [ $? -ne 0 ]; then
    echo "✗ Export thất bại!"
    exit 1
fi

# Kiểm tra file đã tạo
FILE_SIZE=$(du -h $OUTPUT_FILE | cut -f1)
echo "✓ Export thành công"
echo "   File: $OUTPUT_FILE"
echo "   Kích thước: $FILE_SIZE"

# Hướng dẫn upload
echo ""
echo "[4/4] Hoàn thành!"
echo ""
echo "Bước tiếp theo:"
echo "1. Upload file $OUTPUT_FILE lên VPS:"
echo "   scp $OUTPUT_FILE user@your-vps-ip:~/"
echo ""
echo "2. Upload code và cấu hình:"
echo "   scp docker/docker-compose.prod.yml user@your-vps-ip:~/plant-disease-app/docker-compose.yml"
echo "   scp env.example user@your-vps-ip:~/plant-disease-app/"
echo "   scp -r server python runs user@your-vps-ip:~/plant-disease-app/"
echo ""
echo "3. Trên VPS, chạy:"
echo "   docker load -i ~/plant-disease-api.tar"
echo "   cd ~/plant-disease-app"
echo "   docker-compose up -d"
echo ""

