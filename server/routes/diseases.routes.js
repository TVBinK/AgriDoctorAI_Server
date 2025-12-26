const express = require('express');
const router = express.Router();
const Disease = require('../mongodb/models/Disease');

// Trả về toàn bộ danh sách bệnh từ MongoDB
router.get('/api/diseases', async (req, res) => {
    try {
        const diseases = await Disease.find({});

        // Map to maintain backward compatibility if needed, map `diseaseId` to `code`
        const formattedDiseases = diseases.map(doc => ({
            code: doc.diseaseId,
            ...doc.toObject()
        }));

        res.json({
            success: true,
            count: formattedDiseases.length,
            data: formattedDiseases,
        });
    } catch (error) {
        console.error('Lỗi lấy danh sách bệnh:', error);
        res.status(500).json({
            success: false,
            error: 'Không thể lấy danh sách bệnh',
        });
    }
});

module.exports = router;

