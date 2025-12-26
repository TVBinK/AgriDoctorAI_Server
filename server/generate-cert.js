const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sslDir = path.join(__dirname, 'ssl');

if (!fs.existsSync(sslDir)) {
    fs.mkdirSync(sslDir);
}

try {
    console.log('Generating Self-Signed SSL Certificates...');

    const keyPath = path.join(sslDir, 'key.pem');
    const certPath = path.join(sslDir, 'cert.pem');

    // Lệnh OpenSSL để tạo key và cert
    // -x509: Tạo chứng chỉ ký xác thực (Self Signed)
    // -newkey rsa:4096: Tạo key mới RSA 4096 bit
    // -nodes: Không đặt mật khẩu cho key (để server tự đọc được)
    // -days 365: Hạn sử dụng 1 năm
    // -subj: Thông tin định danh (Country, State, Locality, Organization, Common Name)
    const cmd = `openssl req -x509 -newkey rsa:4096 -keyout "${keyPath}" -out "${certPath}" -days 365 -nodes -subj "/C=VN/ST=Hanoi/L=Hanoi/O=AgriDoctor/OU=Backend/CN=localhost"`;

    console.log(`Executing: ${cmd}`);
    execSync(cmd, { stdio: 'inherit' });

    console.log('\n✅ Tạo chứng chỉ thành công!');
    console.log(`👉 Private Key: ${keyPath}`);
    console.log(`👉 Certificate: ${certPath}`);

} catch (error) {
    console.error('\n❌ Lỗi khi tạo chứng chỉ:');
    console.error('Hãy đảm bảo bạn đã cài đặt OpenSSL và đã thêm vào biến môi trường PATH.');
    console.error('Gợi ý: Nếu bạn đã cài Git, hãy thử chạy lệnh này trong Git Bash.');
    console.error('Chi tiết lỗi:', error.message);
}
