const express = require('express');
const infoRouter = express.Router();

infoRouter.get('/', function (req, res) {
    return res.render('./pages/info', { user: req.user })
});

// Обработчик запроса на регистрацию
infoRouter.post('/signup', function (req, res, next) {
    // В случае положительной проверки запускается регистрация
    passport.authenticate('signup', {
        successRedirect: res.redirect('/'),
        failureRedirect: '/',
        failureFlash: true
    })(req, res, next);
});

// Обработчик запроса на выход
infoRouter.get('/logout', function (req, res) {

    console.log(`Пользователь ${req.user} вышел из учетной записи`);
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});
//-------------------------------------------------------------------------------------
module.exports = infoRouter;