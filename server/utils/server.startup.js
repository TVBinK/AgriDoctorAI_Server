const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const serverConfig = require('../config/server.config');

// Cấu hình HTTPS
function createHttpsServer(app) {
    const certPath = path.join(__dirname, '..', 'ssl', 'cert.pem');
    const keyPath = path.join(__dirname, '..', 'ssl', 'key.pem');

    // Kiểm tra certificate có tồn tại không
    if (!fs.existsSync(certPath) || !fs.existsSync(keyPath)) {
        console.error('Khong tim thay SSL certificate!');
        console.error('Vui long chay: npm run generate-cert');
        console.error('   hoặc đặt certificate tại: ssl/cert.pem và ssl/key.pem');
        return null;
    }

    try {
        const options = {
            cert: fs.readFileSync(certPath),
            key: fs.readFileSync(keyPath)
        };

        return https.createServer(options, app);
    } catch (error) {
        console.error('Loi doc SSL certificate:', error.message);
        return null;
    }
}

// Hàm xử lý lỗi khi khởi động server
function handleServerError(server, port, protocol) {
    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.error(`\nLoi: Port ${port} dang duoc su dung!`);
            console.error(`\nGiai phap:`);
            console.error(`   1. Tìm và dừng process đang sử dụng port ${port}:`);
            console.error(`      Windows: netstat -ano | findstr :${port}`);
            console.error(`      Sau đó: taskkill /PID <PID> /F`);
            console.error(`   2. Hoặc thay đổi port trong file .env:`);
            console.error(`      PORT=${port + 1} (cho HTTP)`);
            console.error(`      HTTPS_PORT=${port + 1} (cho HTTPS)`);
            console.error(`   3. Hoặc kill tất cả Node.js processes:`);
            console.error(`      taskkill /F /IM node.exe\n`);
            process.exit(1);
        } else {
            console.error(`\nLoi khoi dong ${protocol} server:`, err.message);
            process.exit(1);
        }
    });
}

// Khởi động server
function startServers(app) {
    if (serverConfig.USE_HTTPS) {
        const httpsServer = createHttpsServer(app);
        if (httpsServer) {
            handleServerError(httpsServer, serverConfig.HTTPS_PORT, 'HTTPS');
            httpsServer.listen(serverConfig.HTTPS_PORT, '0.0.0.0', () => {
                console.log(`HTTPS Server dang chay tai: https://localhost:${serverConfig.HTTPS_PORT}`);
                console.log(`Truy cap tu mang local: https://${serverConfig.LOCAL_IP}:${serverConfig.HTTPS_PORT}`);
                console.log(`API endpoint (Public): https://${serverConfig.PUBLIC_IP}:${serverConfig.HTTPS_PORT}/api/detect`);
                console.log(`API Base URL: https://${serverConfig.PUBLIC_IP}:${serverConfig.HTTPS_PORT}`);
            });
        } else {
            console.log('Khong the khoi dong HTTPS server, dang chay HTTP...');
            const httpServer = http.createServer(app);
            handleServerError(httpServer, serverConfig.PORT, 'HTTP');
            httpServer.listen(serverConfig.PORT, '0.0.0.0', () => {
                console.log(`HTTP Server dang chay tai: http://localhost:${serverConfig.PORT}`);
                console.log(`Truy cap tu mang local: http://${serverConfig.LOCAL_IP}:${serverConfig.PORT}`);
                console.log(`API endpoint (Public): http://${serverConfig.PUBLIC_IP}:${serverConfig.PORT}/api/detect`);
                console.log(`API Base URL: http://${serverConfig.PUBLIC_IP}:${serverConfig.PORT}`);
            });
        }
    } else {
        // Chạy cả HTTP và HTTPS
        const httpServer = http.createServer(app);
        handleServerError(httpServer, serverConfig.PORT, 'HTTP');
        httpServer.listen(serverConfig.PORT, '0.0.0.0', () => {
            console.log(`HTTP Server dang chay tai: http://localhost:${serverConfig.PORT}`);
            console.log(`Truy cap tu mang local: http://${serverConfig.LOCAL_IP}:${serverConfig.PORT}`);
            console.log(`API endpoint (Public): http://${serverConfig.PUBLIC_IP}:${serverConfig.PORT}/api/detect`);
            console.log(`API Base URL: http://${serverConfig.PUBLIC_IP}:${serverConfig.PORT}`);
        });

        const httpsServer = createHttpsServer(app);
        if (httpsServer) {
            handleServerError(httpsServer, serverConfig.HTTPS_PORT, 'HTTPS');
            httpsServer.listen(serverConfig.HTTPS_PORT, '0.0.0.0', () => {
                console.log(`HTTPS Server dang chay tai: https://localhost:${serverConfig.HTTPS_PORT}`);
                console.log(`Truy cap tu mang local: https://${serverConfig.LOCAL_IP}:${serverConfig.HTTPS_PORT}`);
                console.log(`API endpoint (Public): https://${serverConfig.PUBLIC_IP}:${serverConfig.HTTPS_PORT}/api/detect`);
                console.log(`API Base URL: https://${serverConfig.PUBLIC_IP}:${serverConfig.HTTPS_PORT}`);
            });
        } else {
            console.log('HTTPS khong kha dung. Chi HTTP dang chay.');
        }
    }
}

module.exports = {
    startServers
};

