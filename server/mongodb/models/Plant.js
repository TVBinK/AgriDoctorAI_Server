const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    plantId: {
        type: String,
        required: true,
        unique: true
    },
    plantName: {
        type: String,
        required: true
    },
    plantNameVN: {
        type: String,
        required: true
    },
    icon: String,
    description: String,
    scientificName: String,
    family: String,
    commonNames: [String],
    growingRegions: [String],
    season: String,
    careTips: [String],
    commonDiseases: [String]
}, { timestamps: true });

module.exports = mongoose.model('Plant', PlantSchema);
