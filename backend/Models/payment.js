const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    fullName: { type: String, required: true },
    cardNo: { type: Number, unique: false, required: true, minlength: 16 },
    expDate: { type: String, required: true }, 
    orderItems: [
        {
            BookID : {type: String, require: true},
            ISBN: {type: String, required: true},
            BookName: {type: String, required: true},
            Author: {type: String, required: true}
        }
    ]
});

paymentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Payment', paymentSchema);

