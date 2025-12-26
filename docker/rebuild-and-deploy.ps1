# Script PowerShell de rebuild va deploy len server
# Su dung: .\docker\rebuild-and-deploy.ps1
# Hoac: cd docker ; .\rebuild-and-deploy.ps1

# Đảm bảo chạy từ root directory của project
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$rootDir = Split-Path -Parent $scriptPath
Push-Location $rootDir

$VPS_IP = "45.128.222.189"
$VPS_USER = "root"
$APP_DIR = "~/plant-disease-app"
$IMAGE_FILE = "plant-disease-api.tar"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Rebuild va Deploy len VPS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Buoc 1: Build lai
Write-Host "[1/4] Dang build lai Docker image..." -ForegroundColor Yellow
Write-Host "   (Co the mat 15-30 phut)" -ForegroundColor Gray
docker-compose -f docker/docker-compose.yml build api-server

if ($LASTEXITCODE -ne 0) {
    Write-Host "X Build that bai!" -ForegroundColor Red
    exit 1
}
Write-Host "V Build thanh cong" -ForegroundColor Green
Write-Host ""

# Buoc 2: Export image
Write-Host "[2/4] Dang export image..." -ForegroundColor Yellow
docker save plant-disease-api:latest -o $IMAGE_FILE

if ($LASTEXITCODE -ne 0) {
    Write-Host "X Export that bai!" -ForegroundColor Red
    exit 1
}

$fileInfo = Get-Item $IMAGE_FILE
$fileSizeGB = [math]::Round($fileInfo.Length / 1GB, 2)
Write-Host "V Export thanh cong ($fileSizeGB GB)" -ForegroundColor Green
Write-Host ""

# Buoc 3: Upload image
Write-Host "[3/4] Dang upload image len server..." -ForegroundColor Yellow
scp $IMAGE_FILE "${VPS_USER}@${VPS_IP}:~/"

if ($LASTEXITCODE -ne 0) {
    Write-Host "X Upload that bai!" -ForegroundColor Red
    exit 1
}
Write-Host "V Upload thanh cong" -ForegroundColor Green
Write-Host ""

# Buoc 4: Huong dan deploy tren server
Write-Host "[4/4] Hoan thanh!" -ForegroundColor Green
Write-Host ""
Write-Host "Buoc tiep theo tren VPS:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. SSH vao server hoac dung Web Terminal:" -ForegroundColor White
Write-Host "   https://${VPS_IP}:32200/terminal" -ForegroundColor Yellow
Write-Host ""
Write-Host "2. Chay cac lenh sau:" -ForegroundColor White
Write-Host '   cd ~/plant-disease-app' -ForegroundColor Yellow
Write-Host '   docker load -i ~/plant-disease-api.tar' -ForegroundColor Yellow
Write-Host '   docker-compose up -d --force-recreate api-server' -ForegroundColor Yellow
Write-Host ""
Write-Host "3. Kiem tra:" -ForegroundColor White
Write-Host '   docker-compose logs -f api-server' -ForegroundColor Yellow
Write-Host '   curl http://localhost:3000/health' -ForegroundColor Yellow
Write-Host ""

# Quay lại thư mục ban đầu
Pop-Location
