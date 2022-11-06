const mongoose = require("mongoose");

const Type_ticketSchema = mongoose.Schema({
    type_ticket: { type: String },
    versionKey: false
});

module.exports = mongoose.model('Type_ticket', Type_ticketSchema);
