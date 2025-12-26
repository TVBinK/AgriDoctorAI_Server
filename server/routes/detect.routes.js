const express = require('express');
const router = express.Router();
const fs = require('fs');
const verifyToken = require('../middleware/auth.middleware');
const { detectLimiter } = require('../middleware/security.middleware');
const upload = require('../middleware/upload.middleware');
const { runModel } = require('../utils/python.executor');
const { getDiseaseInfoFromDB } = require('../utils/db.helpers');

// API Detect - Nhận diện cây trước, sau đó chuẩn đoán bệnh (Require Login)
router.post('/api/detect', verifyToken, detectLimiter, upload.single('image'), async (req, res) => {
    const timestamp = new Date().toISOString();
    const clientIP = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'] || 'unknown';

    try {
        if (!req.file) {
            console.log(`\n[DETECT REQUEST FAILED] ${timestamp}`);
            console.log(`   IP: ${clientIP}`);
            console.log(`   Loi: Khong co file anh duoc upload\n`);
            return res.status(400).json({
                success: false,
                error: 'Vui lòng upload file ảnh'
            });
        }

        const imagePath = req.file.path;
        const fileName = req.file.originalname;

        console.log(`\n[DETECT REQUEST] ${timestamp}`);
        console.log(`   IP: ${clientIP}`);
        console.log(`   File: ${fileName}`);
        console.log(`   Path: ${imagePath}`);
        console.log(`   Dang xu ly (Nhan dien cay -> Chuan doan benh)...`);

        // Chạy model: Tự động nhận diện cây trước, sau đó chuẩn đoán bệnh
        // Quy trình trong inference.py:
        // 1. Classification: Nhận diện loại cây (Ngo, Lua, Ca_Chua, ...)
        // 2. Detection: Chọn model phù hợp (chuyên biệt hoặc tổng) và phát hiện bệnh
        // 3. Filtering: Lọc kết quả bệnh theo loại cây đã nhận diện
        const result = await runModel(imagePath);

        // Xóa file ảnh tạm sau khi xử lý xong
        fs.unlinkSync(imagePath);

        if (!result.success) {
            console.log(`   Ket qua: Loi - ${result.error || 'Khong xac dinh'}\n`);
            return res.status(500).json({
                success: false,
                error: result.error || 'Có lỗi xảy ra khi xử lý ảnh'
            });
        }

        // Log kết quả nhận diện cây
        console.log(`   Buoc 1 - Nhan dien cay:`);
        console.log(`      Cay: ${result.plant_vn || 'Khong xac dinh'} (${result.plant_name || 'Unknown'})`);
        if (result.cls_confidence) {
            console.log(`      Do tin cay: ${(result.cls_confidence * 100).toFixed(2)}%`);
        }

        // Xử lý và format kết quả theo yêu cầu
        if (result.success && result.detections && result.detections.length > 0) {
            const topDetection = result.detections.reduce((prev, current) =>
                (prev.confidence > current.confidence) ? prev : current
            );

            const diseaseInfo = await getDiseaseInfoFromDB(topDetection.name);

            // Log kết quả chuẩn đoán bệnh
            console.log(`   Buoc 2 - Chuan doan benh:`);
            console.log(`      Phat hien: ${result.detections.length} van de`);
            console.log(`      Benh chinh: ${diseaseInfo.diseaseName}`);
            console.log(`      Do tin cay: ${(topDetection.confidence * 100).toFixed(2)}%`);
            if (result.detections.length > 1) {
                console.log(`      Danh sach benh:`);
                for (const [idx, det] of result.detections.entries()) {
                    const detInfo = await getDiseaseInfoFromDB(det.name);
                    console.log(`         ${idx + 1}. ${detInfo.diseaseName} (${det.name}): ${(det.confidence * 100).toFixed(2)}%`);
                }
            }

            const formattedResult = {
                plantName: result.plant_name,
                plantNameVN: result.plant_vn,
                diseaseName: diseaseInfo.diseaseName,
                possibleProblems: diseaseInfo.possibleProblems,
                symptoms: diseaseInfo.symptoms,
                causes: diseaseInfo.causes,
                treatment: diseaseInfo.treatment,
                recoveryCare: diseaseInfo.recoveryCare
            };

            console.log(`   Tra ve ket qua cho client\n`);

            res.json({
                success: true,
                data: formattedResult
            });
        } else {
            // Không phát hiện bệnh
            console.log(`   Buoc 2 - Chuan doan benh:`);
            console.log(`      Khong phat hien benh - Cay khoe manh`);

            const noDiseaseResult = {
                plantName: result.plant_name || "Unknown",
                plantNameVN: result.plant_vn || "Không xác định",
                diseaseName: "Không phát hiện bệnh",
                possibleProblems: [],
                symptoms: "Không phát hiện triệu chứng nào trong ảnh",
                causes: "Không phát hiện bệnh",
                treatment: [],
                recoveryCare: []
            };

            console.log(`   Tra ve ket qua cho client\n`);

            res.json({
                success: true,
                data: noDiseaseResult
            });
        }

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
            error: 'Có lỗi xảy ra khi xử lý ảnh',
            message: error.message
        });
    }
});

module.exports = router;

