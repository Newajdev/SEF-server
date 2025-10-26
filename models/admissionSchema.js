const mongoose = require('mongoose')
const { Schema } = mongoose;
const paymentDetails = require('./paymentSchema')

const admissionSchema = new Schema({
    admissionDate:{ type: Date, default: Date.now },
    photourl: { type: String, required: true },
    coursname: { type: String, required: true },
    fullnameEng: { type: String, required: true },
    fullnameBan: { type: String, required: true },
    studentMobile: { type: Number, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    nid: { type: Number, required: true },
    guardianName: { type: String, required: true },
    guardianRelation: { type: String, required: true },
    guardianPhone: { type: Number, required: true },
    FathersName: { type: String, required: true },
    MothersName: { type: String, required: true },
    Address: { type: String, required: true },
    Payments: [paymentDetails]
});

module.exports = mongoose.model('AdmitedStudent', admissionSchema);