const multer = require('multer');
const path = require('path');
const fs = require('fs');
const serverConfig = require('../config/server.config');

// Tạo thư mục uploads nếu chưa có
if (!fs.existsSync(serverConfig.UPLOADS_DIR)) {
    fs.mkdirSync(serverConfig.UPLOADS_DIR, { recursive: true });
}

// Cấu hình multer để upload file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, serverConfig.UPLOADS_DIR);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif|bmp/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Chỉ chấp nhận file ảnh (jpg, jpeg, png, gif, bmp)'));
        }
    }
});

module.exports = upload;

