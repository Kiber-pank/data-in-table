const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
    name: { type: String },
    number_passport: { type: String },
    type_passport: { type: String },
    versionKey: false
});

module.exports = mongoose.model('Client', ClientSchema);
