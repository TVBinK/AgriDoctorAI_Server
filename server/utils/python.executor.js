const { exec } = require('child_process');
const path = require('path');

// Hàm chạy model Python - Classification (chỉ nhận diện cây)
function runClassify(imagePath) {
    return new Promise((resolve, reject) => {
        // Đường dẫn từ server/ đến python/classify.py
        const pythonScript = path.join(__dirname, '..', '..', 'python', 'classify.py');
        // Sử dụng python3 cho Linux/Docker, python cho Windows
        const pythonExecutable = process.platform === 'win32' ? 'python' : 'python3';
        const command = `${pythonExecutable} "${pythonScript}" "${imagePath}"`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error('Lỗi chạy classification:', error);
                return reject(error);
            }

            try {
                const result = JSON.parse(stdout);
                resolve(result);
            } catch (parseError) {
                console.error('Lỗi parse JSON:', parseError);
                console.error('Output:', stdout);
                reject(parseError);
            }
        });
    });
}

// Hàm chạy model Python - Detection (nhận diện cây + chuẩn đoán bệnh)
function runModel(imagePath) {
    return new Promise((resolve, reject) => {
        // 1. Tự động detect Python executable: python3 cho Linux/Docker, python cho Windows
        const pythonExecutable = process.platform === 'win32' ? 'python' : 'python3';

        const pythonScript = path.join(__dirname, '..', '..', 'python', 'inference.py');

        // 2. Log ra câu lệnh để kiểm tra xem đường dẫn ghép đúng chưa
        const command = `"${pythonExecutable}" "${pythonScript}" "${imagePath}"`;
        console.log("▶️ Đang chạy lệnh:", command);

        exec(command, (error, stdout, stderr) => {
            // 3. Log toàn bộ kết quả trả về để soi lỗi
            if (stderr) {
                console.log('⚠️ Python Log/Warning (STDERR):', stderr);
                // Lưu ý: YOLO hay in info ra stderr, nên có stderr chưa chắc đã là lỗi chết chương trình.
            }

            if (error) {
                console.error('❌ Lỗi thực thi (EXEC ERROR):', error.message);
                return reject(error);
            }

            console.log('✅ Python Output (STDOUT):', stdout);

            try {
                // 4. Tìm JSON trong đống hỗn độn (nếu output bị bẩn)
                // Mẹo: Tìm ký tự { đầu tiên và } cuối cùng
                const jsonStartIndex = stdout.indexOf('{');
                const jsonEndIndex = stdout.lastIndexOf('}');

                if (jsonStartIndex === -1 || jsonEndIndex === -1) {
                    throw new Error("Không tìm thấy JSON trong output của Python");
                }

                const cleanJson = stdout.substring(jsonStartIndex, jsonEndIndex + 1);
                const result = JSON.parse(cleanJson);

                resolve(result);
            } catch (parseError) {
                console.error('❌ Lỗi Parse JSON:', parseError);
                console.error('🔍 Output gốc nhận được là:', stdout);
                reject(parseError);
            }
        });
    });
}

module.exports = {
    runClassify,
    runModel
};

