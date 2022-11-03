const express = require('express');
const catalogsRouter = express.Router();

// Обработчик запроса на регистрацию
catalogsRouter.post('/signup', function (req, res, next) {
    // В случае положительной проверки запускается регистрация
    passport.authenticate('signup', {
        successRedirect: res.redirect('/'),
        failureRedirect: '/',
        failureFlash: true
    })(req, res, next);
});

// Обработчик запроса на выход
catalogsRouter.get('/logout', function (req, res) {

    console.log(`Пользователь ${req.user} вышел из учетной записи`);
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});
//-------------------------------------------------------------------------------------
module.exports = catalogsRouter;