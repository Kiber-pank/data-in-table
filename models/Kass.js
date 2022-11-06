const mongoose = require("mongoose");

const KassSchema = mongoose.Schema({
    number: { type: String },
    address: { type: String },
    versionKey: false
});

module.exports = mongoose.model('Kass', KassSchema);