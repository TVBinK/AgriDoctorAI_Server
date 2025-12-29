const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../mongodb/models/User');
const PendingUser = require('../mongodb/models/PendingUser');
const sendEmail = require('../utils/sendEmail');

// Khóa bí mật cho JWT (để trong .env)
const JWT_SECRET = process.env.JWT_SECRET;

// --- API Đăng ký (Lưu tạm vào PendingUser) ---
// POST: /api/auth/register
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation cơ bản
        if (!email || !password || !name) {
            return res.status(400).json({ message: "Vui lòng nhập đầy đủ tên, email và mật khẩu." });
        }

        // 1. Kiểm tra email đã tồn tại trong bảng User chính thức chưa
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email đã được sử dụng. Vui lòng đăng nhập." });
        }

        // 2. Hash mật khẩu
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 3. Tạo OTP
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpires = Date.now() + 5 * 60 * 1000; // 5 phút

        // 4. Lưu hoặc cập nhật vào bảng PendingUser (Tạo user tạm)
        // Dùng findOneAndUpdate để nếu đã có request trước đó thì ghi đè OTP mới
        await PendingUser.findOneAndUpdate(
            { email },
            {
                name,
                email,
                password: hashedPassword,
                otp: otpCode,
                otpExpires
            },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );

        // 5. GỬI EMAIL
        const emailSent = await sendEmail(email, otpCode);

        if (!emailSent) {
            return res.status(500).json({ message: "Lỗi gửi email OTP. Vui lòng thử lại." });
        }

        res.status(200).json({
            message: "Mã OTP xác thực đã được gửi đến email.",
            email: email,
            isRegister: true
        });

    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({ message: error.message });
    }
});

// --- API Đăng nhập (Gửi OTP cho user đã tồn tại) ---
// POST: /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Vui lòng nhập email và mật khẩu." });
        }

        // Validation types to prevent NoSQL Injection causing 500 Error
        if (typeof email !== 'string' || typeof password !== 'string') {
            return res.status(400).json({ message: "Dữ liệu không hợp lệ (Email/Password phải là chuỗi)." });
        }

        // 1. Tìm user
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "Tài khoản không tồn tại. Vui lòng đăng ký trước.",
                needRegister: true
            });
        }

        // 1.1 Kiểm tra xem tài khoản có bị khóa không
        if (user.lockUntil && user.lockUntil > Date.now()) {
            const waitMinutes = Math.ceil((user.lockUntil - Date.now()) / 60000);
            return res.status(403).json({
                message: `Tài khoản đã bị khóa tạm thời do nhập sai quá 5 lần. Vui lòng thử lại sau ${waitMinutes} phút.`
            });
        }

        // 2. Kiem tra mat khau
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            // Tăng số lần sai
            user.failedLoginAttempts = (user.failedLoginAttempts || 0) + 1;

            if (user.failedLoginAttempts >= 5) {
                user.lockUntil = Date.now() + 15 * 60 * 1000; // Khóa 15 phút
                console.log(`[SECURITY] Blocked Account: ${email} - IP: ${req.ip} - Reason: 5 Failed Attempts`);
            }

            await user.save();

            return res.status(400).json({
                message: `Mật khẩu không đúng. Số lần sai: ${user.failedLoginAttempts}/5`
            });
        }

        // Đăng nhập thành công -> Reset failed attempts
        if (user.failedLoginAttempts > 0 || user.lockUntil) {
            user.failedLoginAttempts = 0;
            user.lockUntil = undefined;
            // Không cần save ngay ở đây nếu dưới đằng nào cũng save OTP, 
            // KHÔNG, dưới này có save OTP, nên ta gán vào user rồi để lệnh save ở dưới xử lý luôn.
        }

        // 3. Tạo OTP ngẫu nhiên 6 số
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

        // 4. Lưu OTP vào database User (hết hạn sau 5 phút)
        user.otp = otpCode;
        user.otpExpires = Date.now() + 5 * 60 * 1000; // 5 phút
        await user.save();


        // 4. GỬI EMAIL
        const emailSent = await sendEmail(email, otpCode);

        if (!emailSent) {
            return res.status(500).json({ message: "Lỗi gửi email OTP. Vui lòng thử lại." });
        }

        // 5. Trả về thành công
        res.json({
            message: "OTP sent successfully",
            token: ""
        });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: error.message });
    }
});

// --- API Xác thực OTP -> Kích hoạt tài khoản hoặc Đăng nhập ---
// POST: /api/auth/verify-otp
router.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({ message: "Email and OTP are required" });
        }

        // --- TRƯỜNG HỢP 1: ĐĂNG NHẬP (User đã có trong DB chính) ---
        let user = await User.findOne({ email });


        if (user) {
            // Kiểm tra OTP của User
            if (user.otp !== otp) {
                return res.status(400).json({ message: "Mã OTP không đúng (Login)." });
            }
            if (!user.otpExpires || Date.now() > user.otpExpires) {
                return res.status(400).json({ message: "Mã OTP đã hết hạn." });
            }

            // Xóa OTP cũ
            user.otp = null;
            user.otpExpires = null;
            await user.save();

            // Tạo Token
            const token = jwt.sign(
                { userId: user._id, email: user.email, name: user.name },
                JWT_SECRET,
                { expiresIn: '30d' }
            );

            return res.json({
                token: token,
                userId: user._id.toString(),
                name: user.name,
                email: user.email,
                message: "Login Successful"
            });
        }

        // --- TRƯỜNG HỢP 2: ĐĂNG KÝ (User nằm ở PendingUser) ---
        let pendingUser = await PendingUser.findOne({ email });

        if (pendingUser) {
            // Kiểm tra OTP của Pending User
            if (pendingUser.otp !== otp) {
                return res.status(400).json({ message: "Mã OTP không đúng (Register)." });
            }
            if (Date.now() > pendingUser.otpExpires) {
                return res.status(400).json({ message: "Mã OTP đã hết hạn. Vui lòng đăng ký lại." });
            }

            // OTP Chuẩn -> CHUYỂN TỪ PENDING SANG USER CHÍNH THỨC
            const newUser = new User({
                name: pendingUser.name,
                email: pendingUser.email,
                password: pendingUser.password, // Đã hash
                otp: null,
                otpExpires: null
            });

            await newUser.save();

            // Xóa bản ghi tạm
            await PendingUser.deleteOne({ _id: pendingUser._id });

            // Tạo Token cho user mới
            const token = jwt.sign(
                { userId: newUser._id, email: newUser.email, name: newUser.name },
                JWT_SECRET,
                { expiresIn: '30d' }
            );

            return res.json({
                token: token,
                userId: newUser._id.toString(),
                name: newUser.name,
                email: newUser.email,
                message: "Account Verified & Created Successfully"
            });
        }

        // Không tìm thấy ở đâu cả
        return res.status(404).json({ message: "User not found or Registration session expired." });

    } catch (error) {
        console.error("Verify OTP Error:", error);
        res.status(500).json({ message: error.message });
    }
});

// --- API DỄ BỊ TẤN CÔNG (DÙNG ĐỂ TEST/DEMO ONLY) ---
// POST: /api/auth/login-vulnerable
// Note: Route này được thiết kế để CÓ THỂ bị NoSQL Injection bypass nếu không có global middleware chặn lại.
router.post('/login-vulnerable', async (req, res) => {
    try {
        // 1. Lấy input trực tiếp (Không kiểm tra type)
        const { email, password } = req.body;

        console.log("Vulnerable Login Params:", { email, password });

        // 2. Query trực tiếp vào DB bằng DRIVER THUẦN (Bypass Mongoose Schema Protection)
        // User.collection là truy cập thẳng vào MongoDB Native Driver
        // Đây là cách duy nhất để demo Injection nếu Mongoose quá chặt chẽ.
        let user = await User.collection.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // 3. So sánh password (Hoặc bypass password nếu query injection password luôn)
        // Kịch bản bypass: Payload {"email": "valid@email.com", "password": {"$ne": null}}
        // Nhưng ở đây ta dùng bcrypt.compare, nên injection vào password khó hơn trừ khi query cả password trong findOne.
        // HÃY THỬ KỊCH BẢN: Login Bypass bằng cách inject vào query findOne của password

        // Code cực kỳ lỗi (Check password ngay trong query find):
        // let user = await User.findOne({ email: email, password: password }); 

        // Ở đây ta cứ giữ logic findOne(email) rồi check pass để demo injection tìm user.

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Wrong Password" });
        }

        return res.json({
            message: "LOGIN VULNERABLE SUCCESS!",
            user: user
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
