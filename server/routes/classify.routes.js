const express = require('express');
const router = express.Router();
const fs = require('fs');
const verifyToken = require('../middleware/auth.middleware');
const { detectLimiter } = require('../middleware/security.middleware');
const upload = require('../middleware/upload.middleware');
const { runClassify } = require('../utils/python.executor');
const { getPlantInfoFromDB } = require('../utils/db.helpers');

// API Classify - Chỉ nhận diện loại cây (Require Login)
router.post('/api/classify', verifyToken, detectLimiter, upload.single('image'), async (req, res) => {
    const timestamp = new Date().toISOString();
    const clientIP = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'] || 'unknown';

    try {
        if (!req.file) {
            console.log(`\n[CLASSIFY REQUEST FAILED] ${timestamp}`);
            console.log(`   IP: ${clientIP}`);
            console.log(`   Loi: Khong co file anh duoc upload\n`);
            return res.status(400).json({
                success: false,
                error: 'Vui lòng upload file ảnh'
            });
        }

        const imagePath = req.file.path;
        const fileName = req.file.originalname;

        console.log(`\n[CLASSIFY REQUEST] ${timestamp}`);
        console.log(`   IP: ${clientIP}`);
        console.log(`   File: ${fileName}`);
        console.log(`   Path: ${imagePath}`);
        console.log(`   Dang nhan dien cay...`);

        // Chạy classification
        const result = await runClassify(imagePath);

        // Xóa file ảnh tạm sau khi xử lý xong
        fs.unlinkSync(imagePath);

        if (!result.success) {
            console.log(`   Ket qua: Loi - ${result.error || 'Khong xac dinh'}\n`);
            return res.status(500).json({
                success: false,
                error: result.error || 'Có lỗi xảy ra khi nhận diện cây'
            });
        }

        // Lấy thông tin chi tiết về cây từ DB
        const plantInfo = await getPlantInfoFromDB(result.plant_name);

        // Format kết quả - giống format /api/detect nhưng dữ liệu khác
        const responseData = {
            plantName: result.plant_name,
            plantNameVN: result.plant_vn,
            confidence: result.confidence,
            classificationStatus: "Đã nhận diện thành công",
            icon: plantInfo.icon,
            description: plantInfo.description,
            scientificName: plantInfo.scientificName,
            family: plantInfo.family,
            commonNames: plantInfo.commonNames,
            growingRegions: plantInfo.growingRegions,
            season: plantInfo.season,
            careTips: plantInfo.careTips,
            commonDiseases: plantInfo.commonDiseases,
            possiblePlants: result.top_predictions ? result.top_predictions.map(p => ({
                name: p.name,
                nameVN: p.name_vn,
                confidence: p.confidence
            })) : [],
            topPredictions: result.top_predictions || []
        };

        console.log(`   Ket qua nhan dien:`);
        console.log(`      Cay: ${result.plant_vn} (${result.plant_name})`);
        console.log(`      Do tin cay: ${(result.confidence * 100).toFixed(2)}%`);
        if (result.top_predictions && result.top_predictions.length > 1) {
            console.log(`      Top ${result.top_predictions.length} du doan:`);
            result.top_predictions.slice(0, 3).forEach((pred, idx) => {
                console.log(`         ${idx + 1}. ${pred.name_vn} (${pred.name}): ${(pred.confidence * 100).toFixed(2)}%`);
            });
        }
        console.log(`   Tra ve ket qua cho client\n`);

        res.json({
            success: true,
            data: responseData
        });

    } catch (error) {
        console.log(`   Loi xu ly: ${error.message}`);
        console.log(`   Tra ve loi cho client\n`);

        if (req.file && req.file.path) {
            try {
                fs.unlinkSync(req.file.path);
            } catch (unlinkError) {
                console.error('   Loi xoa file:', unlinkError);
            }
        }

        res.status(500).json({
            success: false,
            error: 'Có lỗi xảy ra khi nhận diện cây',
            message: error.message
        });
    }
});

module.exports = router;

