# Script PowerShell de build va export Docker image tren Windows
# Su dung: .\docker\build-and-export.ps1
# Hoac: cd docker ; .\build-and-export.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Build va Export Docker Image" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Kiem tra Docker dang chay
Write-Host "[1/4] Kiem tra Docker..." -ForegroundColor Yellow
try {
    docker info | Out-Null
    Write-Host "[OK] Docker dang chay" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] Docker khong chay! Vui long khoi dong Docker Desktop" -ForegroundColor Red
    exit 1
}

# Đảm bảo chạy từ root directory của project
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$rootDir = Split-Path -Parent $scriptPath
Push-Location $rootDir

# Build image
Write-Host ""
Write-Host "[2/4] Dang build Docker image..." -ForegroundColor Yellow
Write-Host "   (Lan dau co the mat 15-30 phut)" -ForegroundColor Gray
docker-compose -f docker/docker-compose.yml build api-server

if ($LASTEXITCODE -ne 0) {
    Pop-Location
    Write-Host "[ERROR] Build that bai!" -ForegroundColor Red
    exit 1
}

Write-Host "[OK] Build thanh cong" -ForegroundColor Green

# Export image
Write-Host ""
Write-Host "[3/4] Dang export image thanh file .tar..." -ForegroundColor Yellow
Write-Host "   (File co the rat lon, 2-5GB)" -ForegroundColor Gray

# Su dung ten image thuc te sau khi build (docker-compose tao ten theo format: thu_muc-service)
$imageName = "server-api-server:latest"
$outputFile = "plant-disease-api.tar"

docker save $imageName -o $outputFile

if ($LASTEXITCODE -ne 0) {
    Pop-Location
    Write-Host "[ERROR] Export that bai!" -ForegroundColor Red
    exit 1
}

# Kiem tra file da tao
if (Test-Path $outputFile) {
    $fileInfo = Get-Item $outputFile
    $fileSizeGB = [math]::Round($fileInfo.Length / 1GB, 2)
    Write-Host "[OK] Export thanh cong" -ForegroundColor Green
    Write-Host "   File: $outputFile" -ForegroundColor Gray
    Write-Host "   Kich thuoc: $fileSizeGB GB" -ForegroundColor Gray
} else {
    Pop-Location
    Write-Host "[ERROR] File khong duoc tao!" -ForegroundColor Red
    exit 1
}

# Huong dan upload
Write-Host ""
Write-Host "[4/4] Hoan thanh!" -ForegroundColor Green
Write-Host ""
Write-Host "Buoc tiep theo:" -ForegroundColor Cyan
Write-Host "1. Upload file $outputFile len VPS:" -ForegroundColor White
Write-Host "   scp $outputFile user@your-vps-ip:~/" -ForegroundColor Yellow
Write-Host ""
Write-Host "2. Upload code va cau hinh:" -ForegroundColor White
Write-Host "   scp docker/docker-compose.prod.yml user@your-vps-ip:~/plant-disease-app/docker-compose.yml" -ForegroundColor Yellow
Write-Host "   scp env.example user@your-vps-ip:~/plant-disease-app/" -ForegroundColor Yellow
Write-Host "   scp -r server python runs user@your-vps-ip:~/plant-disease-app/" -ForegroundColor Yellow
Write-Host "" -ForegroundColor White
Write-Host "   (Chay tu root directory cua project)" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Tren VPS, chay:" -ForegroundColor White
Write-Host "   docker load -i ~/plant-disease-api.tar" -ForegroundColor Yellow
Write-Host "   cd ~/plant-disease-app" -ForegroundColor Yellow
Write-Host "   docker-compose up -d" -ForegroundColor Yellow
Write-Host ""

# Quay lại thư mục ban đầu
Pop-Location
