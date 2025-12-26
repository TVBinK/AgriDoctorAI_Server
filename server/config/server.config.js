const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const os = require('os');

// Hàm lấy IP address của máy
function getLocalIPAddress() {
    const interfaces = os.networkInterfaces();

    // Ưu tiên Wi-Fi adapter (thường là tên chứa 'Wi-Fi' hoặc 'WLAN')
    const preferredAdapters = ['Wi-Fi', 'WLAN', 'wlan', 'eth0', 'en0'];

    for (const preferred of preferredAdapters) {
        if (interfaces[preferred]) {
            for (const iface of interfaces[preferred]) {
                if (iface.family === 'IPv4' && !iface.internal) {
                    return iface.address;
                }
            }
        }
    }

    // Fallback: lấy adapter đầu tiên (bỏ qua VMware, VirtualBox, etc)
    const excludePatterns = ['VMware', 'VMnet', 'VirtualBox', 'Teredo', 'Bluetooth', 'WSL', 'vEthernet'];
    for (const name of Object.keys(interfaces)) {
        const isExcluded = excludePatterns.some(pattern => name.includes(pattern));
        if (!isExcluded) {
            for (const iface of interfaces[name]) {
                if (iface.family === 'IPv4' && !iface.internal) {
                    return iface.address;
                }
            }
        }
    }

    return 'localhost';
}

// Lấy IP public từ environment variable hoặc tự động detect
function getPublicIP() {
    // Ưu tiên dùng IP từ environment variable (cho VPS)
    if (process.env.PUBLIC_IP) {
        return process.env.PUBLIC_IP;
    }

    // Nếu không có, dùng IP local
    return getLocalIPAddress();
}

module.exports = {
    PORT: process.env.PORT || 3000,
    HTTPS_PORT: process.env.HTTPS_PORT || 3443,
    USE_HTTPS: process.env.USE_HTTPS === 'true' || process.env.USE_HTTPS === '1',
    TRUST_PROXY: process.env.TRUST_PROXY === 'true',
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS?.split(',') || '*',
    LOCAL_IP: getLocalIPAddress(),
    PUBLIC_IP: getPublicIP(),
    UPLOADS_DIR: path.join(__dirname, '..', 'uploads'),
    GEMINI_KEY_FILE: path.join(__dirname, '..', 'gemini-key.json'),
    DEFAULT_GEMINI_KEY: process.env.GEMINI_API_KEY
};

