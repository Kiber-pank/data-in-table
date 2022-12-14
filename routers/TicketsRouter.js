const express = require('express');
const ticketsRouter = express.Router();
const Airline = require("../models/Airline.js");
const Kass = require("../models/Kass.js");
const Cashier = require("../models/Cashier.js");
const Client = require("../models/Client.js");
const Direction = require("../models/Direction.js");
const Type_ticket = require("../models/Type_ticket.js");
const Ticket = require("../models/Ticket.js");

ticketsRouter.get('/get', function (req, res) {
    Ticket.
        find({}).
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
                console.log("get = > err: ", error);
                res.redirect("./");
            })
});

ticketsRouter.get('/get_ticket/:id', function (req, res) {
    Ticket.
        find({ _id: req.params.id }).
        populate('airline').
        populate('cashier').
        populate('client').
        populate('direction').
        populate('kass').
        populate('type_ticket').
        then(
            result => {
                res.send(result[0]);
            },
            error => {
                console.log("get_ticket_id = > err: ", error);
                res.redirect("./");
            })
});

function find_data(data) {
    return new Promise((resolve, reject) => {
        data.
            find({}).
            exec(function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result)
                }
            });
    });
}

//airline: "63643521b3b4319c2fc69e99"
//cashier: "6367ed2a94ff319c3ffdfac7"
//client: "6367f1502d1ba2c3db5edd57"
//data_sale: ""
//direction: "6368175649c773360b8b7076"
//kass: "6367e1d91d99f775798805f7"
//number_ticket: ""
//rate: ""
//type_ticket: "6368176449c773360b8b707b"


ticketsRouter.post('/create_ticket', function (req, res) {

    const ticket = new Ticket({
        airline: req.body.airline,
        cashier: req.body.cashier,
        client: req.body.client,
        data_sale: req.body.data_sale,
        direction: req.body.direction,
        kass: req.body.kass,
        number: req.body.number,
        rate: +req.body.rate,
        type_ticket: req.body.type_ticket,
    });

    ticket.save()
        .then(
            result => {
                res.send("ticket");
            },
            error => {
                console.log("create_ticket = > err: ", error);
                res.redirect("./");
            })
});

ticketsRouter.get('/data_form', function (req, res) {
    Promise.all([
        find_data(Airline),
        find_data(Kass),
        find_data(Cashier),
        find_data(Client),
        find_data(Direction),
        find_data(Type_ticket),
    ]).then(
        result => res.send(result),
        error => alert("????????????: " + error.message) // ????????????: Not Found
    )

});

ticketsRouter.post('/change_ticket', function (req, res) {

    Ticket.updateMany({ _id: req.body.change_ticket_id },
        {
            $set: {
                airline: req.body.airline,
                cashier: req.body.cashier,
                client: req.body.client,
                data_sale: req.body.data_sale,
                direction: req.body.direction,
                kass: req.body.kass,
                number: req.body.number,
                rate: +req.body.rate,
                type_ticket: req.body.type_ticket,
            }
        }).
        exec(function (err, result) {
            if (err) {
                console.log("change_ticket = > err: ", error);
                res.redirect("../");
            } else {
                res.send("ticket");
            }
        });

});

ticketsRouter.post('/delete_ticket', function (req, res) {

    Ticket.
        deleteMany({ _id: req.body.delete_id }).
        exec(function (err, result) {
            if (err) {
                console.log("delete_ticket = > err: ", error);
                res.redirect("../");
            } else {
                res.send("ticket");
            }
        });

});

module.exports = ticketsRouter;