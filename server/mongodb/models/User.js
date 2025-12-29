const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: String,
    password: String, // Optional if using OTP only
    otp: String,      // Current OTP
    otpExpires: Date,  // OTP Expiration time
    failedLoginAttempts: { type: Number, default: 0 },
    lockUntil: { type: Date }
});

module.exports = mongoose.model('User', UserSchema);
