const express = require('express');
const router = express.Router();
const serverConfig = require('../config/server.config');

router.get('/', (req, res) => {
    const protocol = serverConfig.USE_HTTPS ? 'https' : 'http';
    const baseUrl = `${protocol}://${serverConfig.PUBLIC_IP}:${serverConfig.USE_HTTPS ? serverConfig.HTTPS_PORT : serverConfig.PORT}`;
    
    res.json({
        message: 'Plant Detection API',
        version: '1.0.0',
        server: {
            ip: serverConfig.PUBLIC_IP,
            port: serverConfig.USE_HTTPS ? serverConfig.HTTPS_PORT : serverConfig.PORT,
            protocol: protocol,
            baseUrl: baseUrl
        },
        endpoints: {
            'POST /api/classify': 'Upload ảnh để nhận diện loại cây',
            'POST /api/detect': 'Upload ảnh để phân tích bệnh cây trồng (tự động nhận diện cây trước)',
            'GET /api/diseases': 'Lấy toàn bộ danh sách bệnh + thông tin chi tiết',
            'GET /health': 'Kiểm tra trạng thái server',
            'GET /api/gemini-key': 'Lấy Gemini API key',
            'POST /api/gemini-key': 'Lưu Gemini API key'
        },
        apiUrls: {
            classify: `${baseUrl}/api/classify`,
            detect: `${baseUrl}/api/detect`,
            diseases: `${baseUrl}/api/diseases`,
            health: `${baseUrl}/health`,
            geminiKey: `${baseUrl}/api/gemini-key`
        },
        security: {
            rateLimiting: 'enabled',
            https: serverConfig.USE_HTTPS ? 'enabled' : 'disabled',
            helmet: 'enabled',
            cors: 'enabled'
        }
    });
});

module.exports = router;

