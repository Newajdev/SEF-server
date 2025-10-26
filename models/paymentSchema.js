const mongoose = require('mongoose')
const { Schema } = mongoose;

const paymentSchema = new Schema({
        PaymentsBy: { type: String, required: true },
        Phone: { type: Number, required: true },
        Amount: { type: Number, required: true },
        TransetionID: { type: String, required: true },
        reference: { type: String, required: true }
});

module.exports = paymentSchema;