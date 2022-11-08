const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');
const connection = require('./connection/connection.js');

const usersRouter = require('./routers/UserRouter.js');
const catalogsRouter = require('./routers/CatalogsRouter.js');
const ticketsRouter = require('./routers/TicketsRouter.js');
//const infoRouter = require('./routers/infoRouter.js');

require('./passport/config.js');

const auth = function (req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.cookie('module', 'index');
    res.redirect('/login');
  }
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  .use(express.json())
  .use(express.urlencoded({ extended: false }))

  //Запускаем паспорт
  .use(require('cookie-parser')())
  .use(flash())

  //Сессия
  .use(
    session({
      secret: 'SecretKey',
      cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000 //= 7 days
      },
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: connection.connection,
        ttl: 7 * 24 * 60 * 60 // = 7 days
      })
    })
  )

  //Запуск файла конфигурации
  .use(passport.initialize())
  .use(passport.session())

  // Роутер запросов работы с пользователем (логин регистрация, выход)
  .use('/user', usersRouter)

  .use('/catalogs', auth, catalogsRouter)

  .use('/tickets', auth, ticketsRouter)

  //.use('/info', auth, infoRouter)

  .get('/', (req, res) => res.render('pages/index', { user: req.user }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
