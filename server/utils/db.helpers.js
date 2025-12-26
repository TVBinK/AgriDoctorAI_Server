const Plant = require('../mongodb/models/Plant');
const Disease = require('../mongodb/models/Disease');

// Helper function to get Plant Info from DB
async function getPlantInfoFromDB(plantName) {
    if (!plantName) return createDefaultPlant("Unknown");

    try {
        // Try exact match first
        let plant = await Plant.findOne({ plantId: plantName });
        if (plant) return plant;

        // Try case-insensitive match
        plant = await Plant.findOne({ plantId: { $regex: new RegExp(`^${plantName}$`, 'i') } });
        if (plant) return plant;
    } catch (err) {
        console.error('Error fetching plant info:', err);
    }

    return createDefaultPlant(plantName);
}

function createDefaultPlant(name) {
    return {
        plantName: name,
        plantNameVN: name,
        icon: "🌱",
        description: "Thông tin về loại cây này đang được cập nhật.",
        scientificName: "Unknown",
        family: "Unknown",
        commonNames: [name],
        growingRegions: [],
        season: "Unknown",
        careTips: [],
        commonDiseases: []
    };
}

// Helper function to get Disease Info from DB
async function getDiseaseInfoFromDB(diseaseName) {
    try {
        const disease = await Disease.findOne({ diseaseId: diseaseName });
        if (disease) return disease;
    } catch (err) {
        console.error('Error fetching disease info:', err);
    }

    return {
        diseaseName: diseaseName,
        possibleProblems: [],
        symptoms: "Chưa có thông tin chi tiết về bệnh này.",
        causes: "Đang cập nhật",
        treatment: [],
        recoveryCare: []
    };
}

module.exports = {
    getPlantInfoFromDB,
    getDiseaseInfoFromDB,
    createDefaultPlant
};

