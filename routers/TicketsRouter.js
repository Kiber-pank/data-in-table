const express = require('express');
const ticketsRouter = express.Router();
const Airline = require("../models/Airline.js");
const Kass = require("../models/Kass.js");
const Cashier = require("../models/Cashier.js");
const Client = require("../models/Client.js");
const Direction = require("../models/Direction.js");
const Type_ticket = require("../models/Type_ticket.js");
const Ticket = require("../models/Ticket.js");
const { modelName } = require('../models/Airline.js');
const { model } = require('mongoose');

ticketsRouter.get('/data_form', function (req, res) {
    //Promise.all([
    //    find_data(A),
    //    httpGet('/article/promise/guest.json'),
    //    httpGet('/article/promise/no-such-page.json') // (нет такой страницы)
    //  ]).then(
    //    result => alert("не сработает"),
    //    error => alert("Ошибка: " + error.message) // Ошибка: Not Found
    //  )
    return res.send(200);
});

//find_data(modal){
//    return new Promise(resolve, reject) {
//        modal.find({}).
//            exec()
//    }
//}


module.exports = ticketsRouter;