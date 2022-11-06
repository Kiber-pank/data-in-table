const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
    name: { type: String },
    number: { type: String },
    type: { type: String },
    versionKey: false
});

module.exports = mongoose.model('Client', ClientSchema);
