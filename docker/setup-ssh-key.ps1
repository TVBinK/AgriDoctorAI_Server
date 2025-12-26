# Script để tạo và cấu hình SSH key cho server
# Sử dụng: .\setup-ssh-key.ps1

# Cấu hình encoding UTF-8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8
chcp 65001 | Out-Null

# Cấu hình
$VPS_IP = "45.128.222.189"
$VPS_USER = "root"
$SSH_KEY_NAME = "id_ed25519_vps"
$SSH_KEY_PATH = "$env:USERPROFILE\.ssh\$SSH_KEY_NAME"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Thiết lập SSH Key cho VPS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Kiểm tra xem key đã tồn tại chưa
if (Test-Path $SSH_KEY_PATH) {
    Write-Host "[INFO] SSH key đã tồn tại: $SSH_KEY_PATH" -ForegroundColor Yellow
    $overwrite = Read-Host "Bạn có muốn tạo key mới? (y/N)"
    if ($overwrite -ne "y" -and $overwrite -ne "Y") {
        Write-Host "[OK] Sử dụng key hiện có" -ForegroundColor Green
    } else {
        Remove-Item $SSH_KEY_PATH -ErrorAction SilentlyContinue
        Remove-Item "$SSH_KEY_PATH.pub" -ErrorAction SilentlyContinue
    }
}

# Tạo SSH key nếu chưa có
if (-not (Test-Path $SSH_KEY_PATH)) {
    Write-Host "[1/3] Đang tạo SSH key..." -ForegroundColor Yellow
    Write-Host "   Key sẽ được lưu tại: $SSH_KEY_PATH" -ForegroundColor Gray
    
    $email = Read-Host "Nhập email (hoặc Enter để bỏ qua)"
    if ($email) {
        ssh-keygen -t ed25519 -f $SSH_KEY_PATH -C $email -N '""'
    } else {
        ssh-keygen -t ed25519 -f $SSH_KEY_PATH -N '""'
    }
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] Không thể tạo SSH key!" -ForegroundColor Red
        exit 1
    }
    Write-Host "[OK] SSH key đã được tạo" -ForegroundColor Green
    Write-Host ""
}

# Copy public key lên server
Write-Host "[2/3] Đang copy public key lên server..." -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Red
Write-Host "  LƯU Ý QUAN TRỌNG VỀ PASSWORD!" -ForegroundColor Red
Write-Host "========================================" -ForegroundColor Red
Write-Host ""
Write-Host "[X] KHONG dung password aaPanel web interface!" -ForegroundColor Yellow
Write-Host "   - Username aaPanel: chfnttp5" -ForegroundColor Gray
Write-Host "   - Password aaPanel: 416940c5" -ForegroundColor Gray
Write-Host "   -> Day la de dang nhap web, KHONG phai SSH!" -ForegroundColor Gray
Write-Host ""
Write-Host "[OK] Dung SSH Root Password tu aaPanel:" -ForegroundColor Green
Write-Host "   1. Đăng nhập aaPanel: https://${VPS_IP}:32200" -ForegroundColor Yellow
Write-Host "   2. Vào: Security -> SSH (tab SSH)" -ForegroundColor Yellow
Write-Host "   3. Tìm trường 'Root password' (hiển thị password dạng text)" -ForegroundColor Yellow
Write-Host "   4. Copy password đó (ví dụ: hWScryEaLKxNrPDh)" -ForegroundColor Yellow
Write-Host "   5. Nhập password đó khi script hỏi" -ForegroundColor Yellow
Write-Host ""
Write-Host "Bạn sẽ cần nhập SSH Root Password (từ aaPanel SSH settings)" -ForegroundColor Cyan
Write-Host "KHÔNG phải password đăng nhập aaPanel web!" -ForegroundColor Cyan
Write-Host ""
Write-Host ""

$publicKey = Get-Content "$SSH_KEY_PATH.pub" -Raw
$publicKey = $publicKey.Trim()

# Tạo thư mục .ssh và thêm key vào authorized_keys
$sshCommand = @"
mkdir -p ~/.ssh && 
chmod 700 ~/.ssh && 
echo '$publicKey' >> ~/.ssh/authorized_keys && 
chmod 600 ~/.ssh/authorized_keys && 
echo 'SSH key đã được thêm thành công!'
"@

ssh "${VPS_USER}@${VPS_IP}" $sshCommand

if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Không thể copy key lên server!" -ForegroundColor Red
    Write-Host ""
    Write-Host "CÁCH KHÁC - Copy key thủ công qua aaPanel:" -ForegroundColor Cyan
    Write-Host "  1. Mở file public key:" -ForegroundColor White
    Write-Host "     notepad $SSH_KEY_PATH.pub" -ForegroundColor Yellow
    Write-Host "  2. Copy toàn bộ nội dung (1 dòng)" -ForegroundColor White
    Write-Host "  3. Đăng nhập aaPanel: https://${VPS_IP}:32200" -ForegroundColor Yellow
    Write-Host "  4. Vào: Files -> /root/.ssh/authorized_keys" -ForegroundColor Yellow
    Write-Host "  5. Dán nội dung key vào cuối file (mỗi key 1 dòng)" -ForegroundColor White
    Write-Host "  6. Lưu file" -ForegroundColor White
    Write-Host ""
    Write-Host "Hoặc dùng Web Terminal của aaPanel:" -ForegroundColor Cyan
    Write-Host "  1. Truy cập: https://${VPS_IP}:32200/terminal" -ForegroundColor Yellow
    Write-Host "  2. Chạy lệnh:" -ForegroundColor White
    Write-Host "     mkdir -p ~/.ssh" -ForegroundColor Yellow
    Write-Host "     chmod 700 ~/.ssh" -ForegroundColor Yellow
    Write-Host "  3. Copy nội dung từ file $SSH_KEY_PATH.pub" -ForegroundColor White
    Write-Host "  4. Chạy: echo 'PASTE_KEY_HERE' >> ~/.ssh/authorized_keys" -ForegroundColor Yellow
    Write-Host "  5. Chạy: chmod 600 ~/.ssh/authorized_keys" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Sau đó chạy lại script này để test kết nối" -ForegroundColor Gray
    exit 1
}

Write-Host "[OK] Public key đã được copy lên server" -ForegroundColor Green
Write-Host ""

# Test kết nối
Write-Host "[3/3] Đang kiểm tra kết nối SSH..." -ForegroundColor Yellow
ssh -i $SSH_KEY_PATH "${VPS_USER}@${VPS_IP}" "echo 'Kết nối SSH thành công!'"

if ($LASTEXITCODE -eq 0) {
    Write-Host "[OK] Kết nối SSH thành công!" -ForegroundColor Green
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "  Hoàn thành!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Cập nhật deploy-to-server.ps1:" -ForegroundColor Yellow
    Write-Host "   `$SSH_KEY_PATH = `"$SSH_KEY_PATH`"" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host "[WARNING] Kết nối test thất bại, nhưng key đã được copy" -ForegroundColor Yellow
    Write-Host "   Có thể cần kiểm tra lại cấu hình trên server" -ForegroundColor Yellow
}
