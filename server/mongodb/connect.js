const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/plant_disease_db';
        await mongoose.connect(uri);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        // Do not exit process in some environments, but here it's likely fine to just log
        // process.exit(1); 
    }
};

module.exports = connectDB;
