const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables. Please set JWT_SECRET in your .env file or environment.');
}

const verifyToken = (req, res, next) => {
    // 1. Lấy token từ header
    // Header thường có dạng: "Authorization: Bearer <token>"
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Lấy phần sau chữ Bearer

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access Denied. No token provided."
        });
    }

    try {
        // 2. Xác thực token
        const verified = jwt.verify(token, JWT_SECRET);

        // 3. Nếu đúng, lưu thông tin user vào req để dùng ở các bước sau
        req.user = verified;

        next(); // Cho phép đi tiếp
    } catch (err) {
        return res.status(403).json({
            success: false,
            message: "Invalid Token"
        });
    }
};

module.exports = verifyToken;
