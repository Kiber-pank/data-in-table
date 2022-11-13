const express = require('express');
const catalogsRouter = express.Router();
const Airline = require("../models/Airline.js");
const Kass = require("../models/Kass.js");
const Cashier = require("../models/Cashier.js");
const Client = require("../models/Client.js");
const Direction = require("../models/Direction.js");
const Type_ticket = require("../models/Type_ticket.js");

catalogsRouter.get('/', function (req, res) {
    return res.render('./pages/catalogs', { user: req.user })
});

catalogsRouter.post('/change_chapter', function (req, res) {

    switch (req.body.chapter) {
        case "airline":
            Airline.updateMany({ _id: req.body.changeable_id },
                {
                    $set: {
                        code: req.body.code,
                        name: req.body.name,
                        address: req.body.address
                    }
                }).
                exec(function (err, result) {
                    if (err) {
                        console.log("change_chapter = > err: ", error);
                        res.redirect("../");
                    } else {

                        res.send("airline");
                    }
                });
            break;
        case "kass":
            Kass.updateMany({ _id: req.body.changeable_id },
                {
                    $set: {
                        name: req.body.name,
                        address: req.body.address
                    }
                }).
                exec(function (err, result) {
                    if (err) {
                        console.log("change_chapter = > err: ", error);
                        res.redirect("../");
                    } else {
                        res.send("kass");
                    }
                });
            break;
        case "cashier":
            Cashier.updateMany({ _id: req.body.changeable_id },
                {
                    $set: {
                        name: req.body.name,
                        number: req.body.number
                    }
                }).
                exec(function (err, result) {
                    if (err) {
                        console.log("change_chapter = > err: ", error);
                        res.redirect("../");
                    } else {
                        res.send("cashier");
                    }
                });
            break;
        case "client":
            Client.updateMany({ _id: req.body.changeable_id },
                {
                    $set: {
                        code: req.body.code,
                        name: req.body.name,
                        number: req.body.number
                    }
                }).
                exec(function (err, result) {
                    if (err) {
                        console.log("change_chapter = > err: ", error);
                        res.redirect("../");
                    } else {

                        res.send("client");
                    }
                });
            break;
        case "direction":
            Direction.updateMany({ _id: req.body.changeable_id },
                {
                    $set: {
                        direction: req.body.direction,
                    }
                }).
                exec(function (err, result) {
                    if (err) {
                        console.log("change_chapter = > err: ", error);
                        res.redirect("../");
                    } else {

                        res.send("direction");
                    }
                });
            break;
        case "type_ticket":
            Type_ticket.updateMany({ _id: req.body.changeable_id },
                {
                    $set: {
                        type_ticket: req.body.type_ticket,
                    }
                }).
                exec(function (err, result) {
                    if (err) {
                        console.log("change_chapter = > err: ", error);
                        res.redirect("../");
                    } else {

                        res.send("type_ticket");
                    }
                });
            break;

        default:
            break;
    }

});

catalogsRouter.post('/delete_chapter', function (req, res) {

    switch (req.body.chapter) {
        case "airline":
            Airline.
                deleteMany({ _id: req.body.changeable_id }).
                exec(function (err, result) {
                    if (err) {
                        console.log("delete_chapter = > err: ", error);
                        res.redirect("../");
                    } else {

                        res.send("airline");
                    }
                });

            break;
        case "kass":
            Kass.
                deleteMany({ _id: req.body.changeable_id }).
                exec(function (err, result) {
                    if (err) {
                        console.log("delete_chapter = > err: ", error);
                        res.redirect("../");
                    } else {

                        res.send("kass");
                    }
                });

            break;
        case "cashier":
            Cashier.
                deleteMany({ _id: req.body.changeable_id }).
                exec(function (err, result) {
                    if (err) {
                        console.log("delete_chapter = > err: ", error);
                        res.redirect("../");
                    } else {

                        res.send("cashier");
                    }
                });
            break;
        case "client":
            Client.
                deleteMany({ _id: req.body.changeable_id }).
                exec(function (err, result) {
                    if (err) {
                        console.log("delete_chapter = > err: ", error);
                        res.redirect("../");
                    } else {

                        res.send("client");
                    }
                });

            break;
        case "direction":
            Direction.
                deleteMany({ _id: req.body.changeable_id }).
                exec(function (err, result) {
                    if (err) {
                        console.log("delete_chapter = > err: ", error);
                        res.redirect("../");
                    } else {

                        res.send("direction");
                    }
                });
            break;
        case "type_ticket":
            Type_ticket.
                deleteMany({ _id: req.body.changeable_id }).
                exec(function (err, result) {
                    if (err) {
                        console.log("delete_chapter = > err: ", error);
                        res.redirect("../");
                    } else {

                        res.send("type_ticket");
                    }
                });
            break;
        default:
            break;
    }

});


// ----------airline----------//
catalogsRouter.get('/airlines', function (req, res) {
    Airline.find({})
        .then(
            result => {
                res.send(result);
            },
            error => {
                console.log("get_airlines = > err: ", error);
                res.redirect("./");
            })
});

catalogsRouter.get('/airline/:id', function (req, res) {
    Airline.find({ _id: req.params.id })
        .then(
            result => {
                res.send(result[0]);
            },
            error => {
                console.log("get_airlines_id = > err: ", error);
                res.redirect("./");
            })
});

catalogsRouter.post('/create_airlines', function (req, res) {

    const airline = new Airline({
        name: req.body.name,
        code: req.body.code,
        address: req.body.address,
    });

    airline.save()
        .then(
            result => {

                res.send("airline");
            },
            error => {
                console.log("create_airlines = > err: ", error);
                res.redirect("./");
            })
});

// ----------kass----------//

catalogsRouter.get('/kasses', function (req, res) {
    Kass.find({})
        .then(
            result => {
                res.send(result);
            },
            error => {
                console.log("get_kasses = > err: ", error);
                res.redirect("./");
            })
});

catalogsRouter.get('/kass/:id', function (req, res) {
    Kass.find({ _id: req.params.id })
        .then(
            result => {
                res.send(result[0]);
            },
            error => {
                console.log("get_kasses_id = > err: ", error);
                res.redirect("./");
            })
});

catalogsRouter.post('/create_kasses', function (req, res) {

    const kass = new Kass({
        number: req.body.number,
        address: req.body.address,
    });

    kass.save()
        .then(
            result => {

                res.send(result);
            },
            error => {
                console.log("create_kasses = > err: ", error);
                res.redirect("./");
            })
});

// ----------cashier----------//

catalogsRouter.get('/cashiers', function (req, res) {
    Cashier.find({})
        .then(
            result => {
                res.send(result);
            },
            error => {
                console.log("get_cashiers = > err: ", error);
                res.redirect("./");
            })
});

catalogsRouter.get('/cashier/:id', function (req, res) {
    Cashier.find({ _id: req.params.id })
        .then(
            result => {
                res.send(result[0]);
            },
            error => {
                console.log("get_cashiers_id = > err: ", error);
                res.redirect("./");
            })
});

catalogsRouter.post('/create_cashiers', function (req, res) {

    const cashier = new Cashier({
        name: req.body.name,
        number: req.body.number,
    });

    cashier.save()
        .then(
            result => {

                res.send("cashier");
            },
            error => {
                console.log("create_cashiers = > err: ", error);
                res.redirect("./");
            })
});

// ----------client----------//

catalogsRouter.get('/clients', function (req, res) {
    Client.find({})
        .then(
            result => {
                res.send(result);
            },
            error => {
                console.log("get_clients = > err: ", error);
                res.redirect("./");
            })
});

catalogsRouter.get('/client/:id', function (req, res) {
    Client.find({ _id: req.params.id })
        .then(
            result => {
                res.send(result[0]);
            },
            error => {
                console.log("get_clients_id = > err: ", error);
                res.redirect("./");
            })
});

catalogsRouter.post('/create_clients', function (req, res) {

    const client = new Client({
        name: req.body.name,
        type: req.body.type,
        number: req.body.number,
    });

    client.save()
        .then(
            result => {

                res.send("client");
            },
            error => {
                console.log("create_clients = > err: ", error);
                res.redirect("./");
            })
});

// ----------direction----------//

catalogsRouter.get('/directions', function (req, res) {
    Direction.find({})
        .then(
            result => {
                res.send(result);
            },
            error => {
                console.log("get_directions = > err: ", error);
                res.redirect("./");
            })
});

catalogsRouter.get('/direction/:id', function (req, res) {
    Direction.find({ _id: req.params.id })
        .then(
            result => {
                res.send(result[0]);
            },
            error => {
                console.log("get_direction_id = > err: ", error);
                res.redirect("./");
            })
});

catalogsRouter.post('/create_directions', function (req, res) {

    const direction = new Direction({
        direction: req.body.direction,
    });

    direction.save()
        .then(
            result => {

                res.send("direction");
            },
            error => {
                console.log("create_directions = > err: ", error);
                res.redirect("./");
            })
});

// ----------type_ticket----------//

catalogsRouter.get('/type_tickets', function (req, res) {
    Type_ticket.find({})
        .then(
            result => {
                res.send(result);
            },
            error => {
                console.log("get_type_tickets = > err: ", error);
                res.redirect("./");
            })
});

catalogsRouter.get('/type_ticket/:id', function (req, res) {
    Type_ticket.find({ _id: req.params.id })
        .then(
            result => {
                res.send(result[0]);
            },
            error => {
                console.log("get_type_tickets_id = > err: ", error);
                res.redirect("./");
            })
});

catalogsRouter.post('/create_type_tickets', function (req, res) {

    const type_ticket = new Type_ticket({
        type_ticket: req.body.type_ticket,
    });

    type_ticket.save()
        .then(
            result => {

                res.send("type_ticket");
            },
            error => {
                console.log("create_type_tickets = > err: ", error);
                res.redirect("./");
            })
});

module.exports = catalogsRouter;