# Script PowerShell để deploy lên server VPS của bạn
# Sử dụng: .\docker\deploy-to-server.ps1
# Hoặc: cd docker ; .\deploy-to-server.ps1

# Đảm bảo chạy từ root directory của project
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$rootDir = Split-Path -Parent $scriptPath
Push-Location $rootDir

# Cấu hình encoding UTF-8 để hiển thị tiếng Việt đúng
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8
chcp 65001 | Out-Null

# Đọc cấu hình từ file (nếu có)
$VPS_IP = "45.128.222.189"
$VPS_USER = "root"  # Thay đổi nếu cần
$APP_DIR = "~/plant-disease-app"
$DOCKER_IMAGE = "baothanhbin/plant-disease-api:latest"
$SSH_KEY_PATH = "$env:USERPROFILE\.ssh\id_ed25519_vps"  # Đường dẫn đến SSH private key
                     # Để trống nếu muốn dùng password hoặc key mặc định

# Kiểm tra và cấu hình SSH key
$SSH_KEY_ARGS = @()
if ($SSH_KEY_PATH -and (Test-Path $SSH_KEY_PATH)) {
    $SSH_KEY_ARGS = @("-i", $SSH_KEY_PATH)
    Write-Host "[INFO] Sử dụng SSH key: $SSH_KEY_PATH" -ForegroundColor Gray
} else {
    Write-Host "[INFO] Sử dụng password authentication" -ForegroundColor Gray
    Write-Host "      (Bạn sẽ cần nhập password khi kết nối)" -ForegroundColor Gray
}
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Deploy lên VPS Server" -ForegroundColor Cyan
Write-Host "  Server: $VPS_IP" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Upload docker-compose và env
Write-Host "[1/4] Đang upload cấu hình..." -ForegroundColor Yellow
Write-Host "   Kết nối SSH đến ${VPS_USER}@${VPS_IP}..." -ForegroundColor Gray
if ($SSH_KEY_ARGS.Count -gt 0) {
    & ssh @SSH_KEY_ARGS "${VPS_USER}@${VPS_IP}" "mkdir -p $APP_DIR"
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] Không thể tạo thư mục trên server!" -ForegroundColor Red
        exit 1
    }
    & scp @SSH_KEY_ARGS docker/docker-compose.prod.yml "${VPS_USER}@${VPS_IP}:${APP_DIR}/docker-compose.yml"
    if (Test-Path "env.example") {
        & scp @SSH_KEY_ARGS env.example "${VPS_USER}@${VPS_IP}:${APP_DIR}/"
    }
} else {
    & ssh "${VPS_USER}@${VPS_IP}" "mkdir -p $APP_DIR"
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] Không thể tạo thư mục trên server!" -ForegroundColor Red
        exit 1
    }
    & scp docker/docker-compose.prod.yml "${VPS_USER}@${VPS_IP}:${APP_DIR}/docker-compose.yml"
    if (Test-Path "env.example") {
        & scp env.example "${VPS_USER}@${VPS_IP}:${APP_DIR}/"
    }
}

if ($LASTEXITCODE -ne 0) {
    Write-Host "[X] Upload cau hinh that bai!" -ForegroundColor Red
    exit 1
}
Write-Host "[OK] Upload cau hinh thanh cong" -ForegroundColor Green
Write-Host ""

# Upload code
Write-Host "[2/4] Đang upload code và models..." -ForegroundColor Yellow
Write-Host "   (Có thể mất vài phút)" -ForegroundColor Gray
if ($SSH_KEY_ARGS.Count -gt 0) {
    & scp @SSH_KEY_ARGS -r server "${VPS_USER}@${VPS_IP}:${APP_DIR}/"
    & scp @SSH_KEY_ARGS -r python "${VPS_USER}@${VPS_IP}:${APP_DIR}/"
    & scp @SSH_KEY_ARGS -r runs "${VPS_USER}@${VPS_IP}:${APP_DIR}/"
} else {
    & scp -r server "${VPS_USER}@${VPS_IP}:${APP_DIR}/"
    & scp -r python "${VPS_USER}@${VPS_IP}:${APP_DIR}/"
    & scp -r runs "${VPS_USER}@${VPS_IP}:${APP_DIR}/"
}

if ($LASTEXITCODE -ne 0) {
    Write-Host "[X] Upload code that bai!" -ForegroundColor Red
    exit 1
}
Write-Host "[OK] Upload code thanh cong" -ForegroundColor Green
Write-Host ""

# Hướng dẫn bước tiếp theo
Write-Host "[3/4] Hoàn thành upload!" -ForegroundColor Green
Write-Host ""
Write-Host "Bước tiếp theo trên VPS:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. SSH vào server:" -ForegroundColor White
Write-Host "   ssh ${VPS_USER}@${VPS_IP}" -ForegroundColor Yellow
Write-Host ""
Write-Host "2. Pull image từ Docker Hub và chạy:" -ForegroundColor White
Write-Host "   cd $APP_DIR" -ForegroundColor Yellow
Write-Host "   docker pull $DOCKER_IMAGE" -ForegroundColor Yellow
Write-Host "   cp env.example .env" -ForegroundColor Yellow
Write-Host "   nano .env  # Chỉnh sửa nếu cần" -ForegroundColor Yellow
Write-Host "   docker-compose up -d" -ForegroundColor Yellow
Write-Host "   docker-compose exec api-server npm run seed" -ForegroundColor Yellow
Write-Host ""
Write-Host ""
Write-Host "[4/4] Kiểm tra:" -ForegroundColor White
Write-Host "   curl http://localhost:3000/health" -ForegroundColor Yellow
Write-Host "   Hoặc mở: http://${VPS_IP}:3000/health" -ForegroundColor Yellow
Write-Host ""
Write-Host "Hoặc sử dụng Web Terminal:" -ForegroundColor Cyan
Write-Host "   https://${VPS_IP}:32200/terminal" -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Lưu ý về SSH Authentication:" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Nếu gặp lỗi 'Permission denied', bạn cần:" -ForegroundColor White
Write-Host ""
Write-Host "Cách 1: Tạo SSH Key (Khuyến nghị - Tự động):" -ForegroundColor Cyan
Write-Host "   Chạy script helper:" -ForegroundColor White
Write-Host "      .\setup-ssh-key.ps1" -ForegroundColor Yellow
Write-Host "   Script sẽ tự động tạo key và copy lên server" -ForegroundColor Gray
Write-Host ""
Write-Host "Cách 1b: Tạo SSH Key (Thủ công):" -ForegroundColor Cyan
Write-Host "   1. Tạo SSH key trên máy Windows:" -ForegroundColor White
Write-Host "      ssh-keygen -t ed25519 -C `"your_email@example.com`"" -ForegroundColor Yellow
Write-Host "   2. Copy public key lên server:" -ForegroundColor White
Write-Host "      type $env:USERPROFILE\.ssh\id_ed25519.pub | ssh ${VPS_USER}@${VPS_IP} `"mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys`"" -ForegroundColor Yellow
Write-Host "   3. Cập nhật `$SSH_KEY_PATH trong script này:" -ForegroundColor White
Write-Host "      `$SSH_KEY_PATH = `"$env:USERPROFILE\.ssh\id_ed25519`"" -ForegroundColor Yellow
Write-Host ""
Write-Host "Cách 2: Dùng Password (Nhập mỗi lần chạy script)" -ForegroundColor Cyan
Write-Host "   - Để trống `$SSH_KEY_PATH" -ForegroundColor White
Write-Host "   - Script sẽ hỏi password mỗi lần kết nối" -ForegroundColor White
Write-Host ""
Write-Host "Cách 3: Dùng aaPanel Web Terminal" -ForegroundColor Cyan
Write-Host "   - Truy cập: https://${VPS_IP}:32200/terminal" -ForegroundColor Yellow
Write-Host "   - Upload file thủ công qua File Manager trong aaPanel" -ForegroundColor White
Write-Host ""

# Quay lại thư mục ban đầu
Pop-Location
