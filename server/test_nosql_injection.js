const http = require('http');

// Configuration
const PORT = process.env.PORT || 3000;
const HOST = 'localhost';

// The malicious payload: trying to find ANY user where email is NOT null
// Normal behavior (Safe): server sees email as object {"$ne": null} -> searches for email equal to that object -> Finds nothing (404).
// Vulnerable behavior: server executes query { email: { $ne: null } } -> Finds the first user in DB -> Checks password -> Returns 400 (Password incorrect) or 200 (if password bypassed, usually not).
const payload = JSON.stringify({
    email: { "$ne": null },
    password: "wrongpassword123"
});

const options = {
    hostname: HOST,
    port: PORT,
    path: '/api/auth/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': payload.length
    }
};

console.log(`[TEST] Sending NoSQL Injection payload to http://${HOST}:${PORT}/api/auth/login...`);
console.log(`[PAYLOAD] ${payload}\n`);

const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(`[RESPONSE STATUS] ${res.statusCode}`);
        console.log(`[RESPONSE BODY] ${data}\n`);

        console.log('--- ANALYSIS ---');
        console.log(`Status Code detected: ${res.statusCode}`);

        if (res.statusCode === 404) {
            console.log("✅ KẾT QUẢ: AN TOÀN (SAFE).");
            console.log("Giải thích: Server trả về 404, nghĩa là không tìm thấy user nào khớp với email '{\" $ne\": null }'.");
            console.log("Điều này chứng tỏ `express-mongo-sanitize` đã hoạt động (loại bỏ dấu $) hoặc query string không khớp object.");
        } else if (res.statusCode === 400) {
            // Cần kiểm tra message để chắc chắn
            if (data.includes("Mật khẩu không đúng")) {
                console.log("❌ KẾT QUẢ: CÓ THỂ BỊ LỖI (VULNERABLE)!");
                console.log("Giải thích: Server trả về 'Mật khẩu không đúng', nghĩa là nó ĐÃ TÌM THẤY một user nào đó dựa trên injection query.");
                console.log("Cần kiểm tra lại middleware `mongoSanitize`.");
            } else {
                console.log("⚠️ KẾT QUẢ: KHÔNG RÕ RÀNG (400).");
                console.log("Server trả về lỗi Bad Request, có thể do validation input.");
            }
        } else {
            console.log(`❓ KẾT QUẢ KHÁC (${res.statusCode}). Kiểm tra log server.`);
        }
    });
});

req.on('error', (error) => {
    console.error(`[ERROR] Cannot connect to server: ${error.message}`);
    console.error("Make sure the server is running (npm run dev)!");
});

req.write(payload);
req.end();
