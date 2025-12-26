const nodemailer = require('nodemailer');

const sendEmail = async (to, otp) => {
    try {
        // Cấu hình transporter (người gửi)
        // Lưu ý: Với Gmail, bạn cần dùng "App Password" chứ không phải mật khẩu đăng nhập bình thường.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Email của bạn (vd: abc@gmail.com)
                pass: process.env.EMAIL_PASS  // Mật khẩu ứng dụng (App Password)
            }
        });

        // Nội dung email
        const mailOptions = {
            from: `"AgriDoctorAI Support" <${process.env.EMAIL_USER}>`,
            to: to,
            subject: 'Mã xác thực OTP của bạn',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #4CAF50;">Xác thực tài khoản</h2>
                    <p>Xin chào,</p>
                    <p>Mã xác thực (OTP) của bạn là:</p>
                    <h1 style="color: #333; letter-spacing: 5px;">${otp}</h1>
                    <p>Mã này sẽ hết hạn sau 5 phút.</p>
                    <p>Nếu bạn không yêu cầu mã này, vui lòng bỏ qua email này.</p>
                    <hr>
                    <p style="font-size: 12px; color: #888;">Đây là email tự động, vui lòng không trả lời.</p>
                </div>
            `
        };

        // Gửi mail
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return true;
    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }
};

module.exports = sendEmail;
