const express = require('express');
const randomRouter = express.Router();

randomRouter.get('/', function (req, res) {
    return res.render('./pages/info', { user: req.user })
});

//-------------------------------------------------------------------------------------
module.exports = randomRouter;