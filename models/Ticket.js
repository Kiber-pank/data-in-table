const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const TicketSchema = mongoose.Schema({
    number: { type: String },
    type_ticket: { type: Schema.Types.ObjectId, ref: 'Type_ticket' },
    data_sale: { type: Date },
    kass: { type: Schema.Types.ObjectId, ref: 'Kass' },
    cashier: { type: Schema.Types.ObjectId, ref: 'Cashier' },
    airline: { type: Schema.Types.ObjectId, ref: 'Airline' },
    direction: { type: Schema.Types.ObjectId, ref: 'Direction' },
    rate: { type: Number },
    client: { type: Schema.Types.ObjectId, ref: 'Client' },
    versionKey: false
});

module.exports = mongoose.model('Ticket', TicketSchema);
