const fs = require('fs');
const serverConfig = require('../config/server.config');

// Hàm lưu Gemini API key (deprecated - giữ lại để backward compatibility)
// Khuyến nghị: Sử dụng biến môi trường GEMINI_API_KEY trong .env
function saveGeminiKey(apiKey) {
    try {
        const data = {
            apiKey: apiKey,
            updatedAt: new Date().toISOString()
        };
        fs.writeFileSync(serverConfig.GEMINI_KEY_FILE, JSON.stringify(data, null, 2), 'utf8');
        console.warn('⚠️  Cảnh báo: saveGeminiKey() đã deprecated. Vui lòng sử dụng biến môi trường GEMINI_API_KEY trong .env');
        return true;
    } catch (error) {
        console.error('Lỗi lưu Gemini API key:', error);
        return false;
    }
}

// Hàm đọc Gemini API key
// Ưu tiên đọc từ biến môi trường GEMINI_API_KEY
// Fallback về file JSON nếu không có trong .env (backward compatibility)
function getGeminiKey() {
    // Ưu tiên đọc từ biến môi trường
    if (process.env.GEMINI_API_KEY) {
        return process.env.GEMINI_API_KEY;
    }

    // Fallback: đọc từ file JSON (backward compatibility)
    try {
        if (!fs.existsSync(serverConfig.GEMINI_KEY_FILE)) {
            return serverConfig.DEFAULT_GEMINI_KEY || null;
        }
        const data = fs.readFileSync(serverConfig.GEMINI_KEY_FILE, 'utf8');
        const jsonData = JSON.parse(data);
        return jsonData.apiKey || serverConfig.DEFAULT_GEMINI_KEY || null;
    } catch (error) {
        console.error('Lỗi đọc Gemini API key từ file:', error);
        return serverConfig.DEFAULT_GEMINI_KEY || null;
    }
}

module.exports = {
    saveGeminiKey,
    getGeminiKey
};

