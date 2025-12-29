const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.middleware');
const { geminiKeyLimiter } = require('../middleware/security.middleware');
const { getGeminiKey } = require('../utils/gemini.key');

// API Gemini Key - GET: Lấy API key (Require Login)
router.get('/api/gemini-key', verifyToken, geminiKeyLimiter, (req, res) => {
    const timestamp = new Date().toISOString();
    const clientIP = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'] || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';

    try {
        const apiKey = getGeminiKey();

        if (!apiKey) {
            console.log(`   Ket qua: Khong tim thay API key`);
            return res.status(404).json({
                success: false,
                error: 'Gemini API key chưa được cấu hình'
            });
        }

        console.log(`   Ket qua: Da tra ve API key thanh cong`);
        console.log(`   API Key: ${apiKey.substring(0, 10)}...${apiKey.substring(apiKey.length - 4)}`);

        res.json({
            success: true,
            data: {
                apiKey: apiKey
            }
        });
    } catch (error) {
        console.error(`   Loi: ${error.message}`);
        res.status(500).json({
            success: false,
            error: 'Có lỗi xảy ra khi lấy API key',
            message: error.message
        });
    }
});

module.exports = router;

