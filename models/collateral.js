const mongoose = require('mongoose');
const collateralSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required"
    },
    amount: {
        type: Number,
        required: "Number is required"
    },
    status: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Types.ObjectId,
        'ref':'user'
    }
});

module.exports = mongoose.model('Collateral', collateralSchema);
