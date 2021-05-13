const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    fullName: { type: String, required: true },
    cardNo: { type: Number, required: true, unique: true, minlength: 16 },
    expDate: { type: Date, required: true }, 
});

paymentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Payment', paymentSchema);

