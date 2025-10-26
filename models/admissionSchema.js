const mongoose = require('mongoose')
const { Schema } = mongoose;
const paymentDetails = require('./paymentSchema')

const admissionSchema = new Schema({
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
    FathersName: { type: Number, required: true },
    MothersName: { type: Number, required: true },
    Address: { type: Number, required: true },
    Payments: [paymentDetails]
});

module.exports = mongoose.model('AdmitedStudent', admissionSchema);