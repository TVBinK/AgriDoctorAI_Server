#!/bin/bash
# Script Bash để deploy lên server VPS
# Sử dụng: chmod +x docker/deploy-to-server.sh && ./docker/deploy-to-server.sh
# Hoặc: cd docker && chmod +x deploy-to-server.sh && ./deploy-to-server.sh

# Đảm bảo chạy từ root directory của project
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$ROOT_DIR"

# Cấu hình
VPS_IP="45.128.222.189"
VPS_USER="root"  # Thay đổi nếu cần
APP_DIR="~/plant-disease-app"
IMAGE_FILE="plant-disease-api.tar"

echo "========================================"
echo "  Deploy lên VPS Server"
echo "  Server: $VPS_IP"
echo "========================================"
echo ""

# Kiểm tra file image
if [ ! -f "$IMAGE_FILE" ]; then
    echo "✗ Không tìm thấy file $IMAGE_FILE"
    echo "   Vui lòng chạy build-and-export.sh trước"
    exit 1
fi

echo "[1/5] Kiểm tra file image..."
FILE_SIZE=$(du -h $IMAGE_FILE | cut -f1)
echo "✓ File: $IMAGE_FILE ($FILE_SIZE)"
echo ""

# Upload image
echo "[2/5] Đang upload Docker image lên server..."
echo "   (Có thể mất vài phút tùy vào tốc độ mạng)"
scp $IMAGE_FILE "${VPS_USER}@${VPS_IP}:~/"

if [ $? -ne 0 ]; then
    echo "✗ Upload thất bại! Kiểm tra kết nối SSH"
    exit 1
fi
echo "✓ Upload image thành công"
echo ""

# Upload docker-compose và env
echo "[3/5] Đang upload cấu hình..."
ssh "${VPS_USER}@${VPS_IP}" "mkdir -p $APP_DIR"
scp docker/docker-compose.prod.yml "${VPS_USER}@${VPS_IP}:${APP_DIR}/docker-compose.yml"
scp env.example "${VPS_USER}@${VPS_IP}:${APP_DIR}/"

if [ $? -ne 0 ]; then
    echo "✗ Upload cấu hình thất bại!"
    exit 1
fi
echo "✓ Upload cấu hình thành công"
echo ""

# Upload code
echo "[4/5] Đang upload code và models..."
echo "   (Có thể mất vài phút)"
scp -r server "${VPS_USER}@${VPS_IP}:${APP_DIR}/"
scp -r python "${VPS_USER}@${VPS_IP}:${APP_DIR}/"
scp -r runs "${VPS_USER}@${VPS_IP}:${APP_DIR}/"

if [ $? -ne 0 ]; then
    echo "✗ Upload code thất bại!"
    exit 1
fi
echo "✓ Upload code thành công"
echo ""

# Hướng dẫn bước tiếp theo
echo "[5/5] Hoàn thành upload!"
echo ""
echo "Bước tiếp theo trên VPS:"
echo ""
echo "1. SSH vào server:"
echo "   ssh ${VPS_USER}@${VPS_IP}"
echo ""
echo "2. Import image và chạy:"
echo "   cd $APP_DIR"
echo "   docker load -i ~/$IMAGE_FILE"
echo "   cp env.example .env"
echo "   nano .env  # Chỉnh sửa nếu cần"
echo "   docker-compose up -d"
echo "   docker-compose exec api-server npm run seed"
echo ""
echo "3. Kiểm tra:"
echo "   curl http://localhost:3000/health"
echo "   Hoặc mở: http://${VPS_IP}:3000/health"
echo ""
echo "Hoặc sử dụng Web Terminal:"
echo "   https://${VPS_IP}:32200/terminal"
echo ""

