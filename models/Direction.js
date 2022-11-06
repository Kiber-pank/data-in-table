const mongoose = require("mongoose");

const DirectionSchema = mongoose.Schema({
    direction: { type: String },
    versionKey: false
});

module.exports = mongoose.model('Direction', DirectionSchema);
