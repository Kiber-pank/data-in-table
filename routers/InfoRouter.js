const express = require('express');
const infoRouter = express.Router();

infoRouter.get('/', function (req, res) {
    return res.render('./pages/info', { user: req.user })
});

//-------------------------------------------------------------------------------------
module.exports = infoRouter;