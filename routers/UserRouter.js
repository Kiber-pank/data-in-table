const express = require('express');
const userRouter = express.Router();
const passport = require('passport');


// Обработчик запроса на аутентификацию
userRouter.post('/login', function (req, res, next) {
    // Запускаем проверку входа
    passport.authenticate('local', function (err, user) {

        if (err) return next(err);
        // Если проблема редирект на главную страницу
        if (!user) {
            return res.redirect('/');
        }
        // Если проблем нет редирект на личную страницу
        req.logIn(user, function (err) {
            if (err) return next(err);
            console.log(`Пользователь направлен на свою страницу`, user);
            return res.redirect('/');
        });
    })(req, res, next);
});

// Обработчик запроса GET на вход
userRouter.get('/login', function (req, res) {
    // Всегда редирект на главную для запуска паспорта
    return res.redirect('/');
});

// Обработчик запроса GET на вход
userRouter.get('/signup', function (req, res) {
    // Всегда редирект на главную для запуска паспорта
    return res.redirect('/');
});

// Обработчик запроса на регистрацию
userRouter.post('/signup', function (req, res, next) {
    // В случае положительной проверки запускается регистрация
    passport.authenticate('signup', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true
    })(req, res, next);
});

// Обработчик запроса на выход
userRouter.get('/logout', function (req, res) {

    console.log(`Пользователь ${req.user} вышел из учетной записи`);
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});
//-------------------------------------------------------------------------------------
module.exports = userRouter;