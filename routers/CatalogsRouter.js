const express = require('express');
const catalogsRouter = express.Router();
const Airline = require("../models/Airline.js");
const Kass = require("../models/Kass.js");


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
                        console.log("change_status/cm_propposal/reserv = > err: ", error);
                        res.redirect("../");
                    } else {
                        console.log("result: ", result);
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
                        console.log("change_status/cm_propposal/reserv = > err: ", error);
                        res.redirect("../");
                    } else {
                        res.send("kass");
                    }
                });
            break;
        case "cashiers":
            break;
        case "client":
            break;
        case "direction":
            break;
        case "type_ticket":
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
                        console.log("change_status/cm_propposal/reserv = > err: ", error);
                        res.redirect("../");
                    } else {
                        console.log("result: ", result);
                        res.send("airline");
                    }
                });

            break;
        case "kass":
            Kass.
                deleteMany({ _id: req.body.changeable_id }).
                exec(function (err, result) {
                    if (err) {
                        console.log("change_status/cm_propposal/reserv = > err: ", error);
                        res.redirect("../");
                    } else {
                        console.log("result: ", result);
                        res.send("kass");
                    }
                });

            break;
        case "cashiers":
            break;
        case "client":
            break;
        case "direction":
            break;
        case "type_ticket":
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
                console.log("get_airlines = > err: ", error);
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
                console.log(result);
                res.send("airline");
            },
            error => {
                console.log("create_airlines = > err: ", error);
                res.redirect("./");
            })
});

// ----------cashier----------//

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
                console.log("get_kasses = > err: ", error);
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
                console.log(result);
                res.send(result);
            },
            error => {
                console.log("create_kasses = > err: ", error);
                res.redirect("./");
            })
});

// ----------client----------//
// ----------direction----------//
// ----------type_ticket----------//


module.exports = catalogsRouter;