const express = require('express');
const randomRouter = express.Router();
const Ticket = require("../models/Ticket.js");

randomRouter.get('/', function (req, res) {
    return res.render('./pages/info', { user: req.user })
});

randomRouter.get('/summ_sale', function (req, res) {
    Ticket.aggregate([
        // Join with user_info table
        {
            $lookup: {
                from: "airlines",       // other table name
                localField: "airline",   // name of users table field
                foreignField: "_id", // name of userinfo table field
                as: "airline"         // alias for userinfo table
            }
        },
        { $unwind: "$airline" },
        // Second Stage
        {
            $group: { _id: "$airline.name", tickets: { $push: "$$ROOT" } }
        },
    ]).
        then(
            result => {
                res.send(result);
            },
            error => {
                console.log("summ_sale = > err: ", error);
                res.redirect("./");
            })
});



randomRouter.post('/airline_client', function (req, res) {
    Ticket.find({
        airline: req.body.id_airline
    }).
        populate('client').
        then(
            result => {
                res.send(result);
            },
            error => {
                console.log("airline_client = > err: ", error);
                res.redirect("./");
            })
})



randomRouter.post('/tickets_period', function (req, res) {

    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if (1 * req.body.month > 1 * mm) {
        yyyy = yyyy - 1;
    }

    let day = new Date(yyyy, req.body.month.padStart(2, '0'), 0).getDate()

    let start_date = `${yyyy}-${req.body.month.padStart(2, '0')}-01`
    let end_date = `${yyyy}-${req.body.month.padStart(2, '0')}-${day}`

    Ticket.find({
        data_sale: { $gte: start_date, $lte: end_date },
        airline: req.body.airline,
    }).
        populate('airline').
        populate('cashier').
        populate('client').
        populate('direction').
        populate('kass').
        populate('type_ticket').
        then(
            result => {
                res.send(result);
            },
            error => {
                console.log("tickets_period = > err: ", error);
                res.redirect("./");
            })


});
//-------------------------------------------------------------------------------------
module.exports = randomRouter;