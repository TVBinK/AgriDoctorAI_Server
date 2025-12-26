const mongoose = require('mongoose');

const TreatmentStepSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    steps: [String]
}, { _id: false });

const RecoveryCareSchema = new mongoose.Schema({
    title: String,
    steps: [String]
}, { _id: false });

const DiseaseSchema = new mongoose.Schema({
    diseaseId: {
        type: String,
        required: true,
        unique: true
    },
    diseaseName: {
        type: String,
        required: true
    },
    possibleProblems: [String],
    symptoms: String,
    causes: String,
    treatment: [TreatmentStepSchema],
    recoveryCare: [RecoveryCareSchema]
}, { timestamps: true });

module.exports = mongoose.model('Disease', DiseaseSchema);
