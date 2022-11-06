const mongoose = require("mongoose");

const CashierSchema = mongoose.Schema({
    name: { type: String },
    number: { type: String },
    versionKey: false
});

module.exports = mongoose.model('Cashier', CashierSchema);