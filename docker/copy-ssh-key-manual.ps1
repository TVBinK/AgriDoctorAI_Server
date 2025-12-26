# Script helper để copy SSH key thủ công qua aaPanel
# Sử dụng khi không thể copy key tự động qua SSH

# Cấu hình encoding UTF-8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8
chcp 65001 | Out-Null

$SSH_KEY_NAME = "id_ed25519_vps"
$SSH_KEY_PATH = "$env:USERPROFILE\.ssh\$SSH_KEY_NAME.pub"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Copy SSH Key thủ công qua aaPanel" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Kiểm tra file public key
if (-not (Test-Path $SSH_KEY_PATH)) {
    Write-Host "[ERROR] Không tìm thấy file: $SSH_KEY_PATH" -ForegroundColor Red
    Write-Host "   Vui lòng chạy setup-ssh-key.ps1 trước để tạo key" -ForegroundColor Yellow
    exit 1
}

# Đọc public key
$publicKey = Get-Content $SSH_KEY_PATH -Raw
$publicKey = $publicKey.Trim()

Write-Host "[1/3] Đã đọc public key từ: $SSH_KEY_PATH" -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Nội dung Public Key:" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host $publicKey -ForegroundColor White
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Copy vào clipboard
$publicKey | Set-Clipboard
Write-Host "[2/3] Đã copy public key vào clipboard!" -ForegroundColor Green
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Hướng dẫn copy key lên server:" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "CÁCH 1: Qua aaPanel Web Terminal (Khuyến nghị)" -ForegroundColor Cyan
Write-Host "  1. Truy cập: https://45.128.222.189:32200/terminal" -ForegroundColor Yellow
Write-Host "  2. Chạy các lệnh sau:" -ForegroundColor White
Write-Host "     mkdir -p ~/.ssh" -ForegroundColor Yellow
Write-Host "     chmod 700 ~/.ssh" -ForegroundColor Yellow
Write-Host "  3. Dán key (đã copy vào clipboard) vào lệnh sau:" -ForegroundColor White
Write-Host "     echo 'PASTE_KEY_HERE' >> ~/.ssh/authorized_keys" -ForegroundColor Yellow
Write-Host "     (Thay PASTE_KEY_HERE bằng key đã copy)" -ForegroundColor Gray
Write-Host "  4. Chạy:" -ForegroundColor White
Write-Host "     chmod 600 ~/.ssh/authorized_keys" -ForegroundColor Yellow
Write-Host ""
Write-Host "CÁCH 2: Qua aaPanel File Manager" -ForegroundColor Cyan
Write-Host "  1. Đăng nhập aaPanel: https://45.128.222.189:32200" -ForegroundColor Yellow
Write-Host "  2. Vào: Files -> /root/.ssh/" -ForegroundColor Yellow
Write-Host "  3. Nếu chưa có thư mục .ssh, tạo mới" -ForegroundColor White
Write-Host "  4. Tạo hoặc mở file: authorized_keys" -ForegroundColor Yellow
Write-Host "  5. Dán key vào cuối file (mỗi key 1 dòng)" -ForegroundColor White
Write-Host "  6. Lưu file" -ForegroundColor White
Write-Host "  7. Set permission: 600 cho authorized_keys, 700 cho .ssh" -ForegroundColor Yellow
Write-Host ""
Write-Host "CÁCH 3: Qua SSH với password đúng" -ForegroundColor Cyan
Write-Host "  1. Lấy SSH password từ aaPanel:" -ForegroundColor White
Write-Host "     - Vào: Security -> SSH Management" -ForegroundColor Yellow
Write-Host "     - Xem hoặc đặt lại SSH password cho user root" -ForegroundColor Yellow
Write-Host "  2. Chạy lại: .\setup-ssh-key.ps1" -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Sau khi copy key, test kết nối:" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ssh -i $env:USERPROFILE\.ssh\$SSH_KEY_NAME root@45.128.222.189" -ForegroundColor Yellow
Write-Host ""
