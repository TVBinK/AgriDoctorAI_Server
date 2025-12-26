const mongoose = require('mongoose');
const Plant = require('./models/Plant');
const Disease = require('./models/Disease');
const { plantDatabase } = require('../plantData');
const { diseaseDatabase } = require('../diseaseData');
const connectDB = require('./connect');
require('dotenv').config({ path: '../.env' });

const seedData = async () => {
    await connectDB();

    try {
        // Clear existing data
        await Plant.deleteMany({});
        await Disease.deleteMany({});
        console.log('Cleared existing data.');

        // Seed Plants
        const plantDocs = Object.entries(plantDatabase).map(([key, value]) => ({
            plantId: key,
            ...value
        }));

        if (plantDocs.length > 0) {
            await Plant.insertMany(plantDocs);
            console.log(`Seeded ${plantDocs.length} plants.`);
        }

        // Seed Diseases
        const diseaseDocs = Object.entries(diseaseDatabase).map(([key, value]) => ({
            diseaseId: key,
            ...value
        }));

        if (diseaseDocs.length > 0) {
            await Disease.insertMany(diseaseDocs);
            console.log(`Seeded ${diseaseDocs.length} diseases.`);
        }

        console.log('Data Seeding Completed!');
        process.exit();
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
};

seedData();
