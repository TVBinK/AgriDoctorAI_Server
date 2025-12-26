const { body, validationResult } = require('express-validator');

// Middleware validation cho API key
const validateApiKey = [
    body('apiKey')
        .notEmpty().withMessage('API key không được để trống')
        .isString().withMessage('API key phải là chuỗi')
        .isLength({ min: 10, max: 200 }).withMessage('API key phải có độ dài từ 10 đến 200 ký tự')
        .matches(/^[A-Za-z0-9_-]+$/).withMessage('API key chỉ được chứa chữ cái, số, dấu gạch dưới và gạch ngang'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                error: 'Validation failed',
                errors: errors.array()
            });
        }
        next();
    }
];

module.exports = {
    validateApiKey
};

