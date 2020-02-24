const mongoose = require('mongoose');
const modelName = 'donations';

const donationSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model(modelName, donationSchema);
