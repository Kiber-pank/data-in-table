const mongoose = require("mongoose");

const AirlineSchema = mongoose.Schema({
    code: { type: String, unique: true },
    name: { type: String },
    address: { type: String },
    versionKey: false
});

module.exports = mongoose.model('Airline', AirlineSchema);