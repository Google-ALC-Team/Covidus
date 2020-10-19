
let morgan = require('morgan') // for logging
let path = require('path')
let express = require('express');
let moment = require('moment');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');
let session = require('express-session');

const passport = require('passport')

const dotenv = require('dotenv')
const mainRoute = require('../routes/index')
const setPassport = require('./passport')
const expressHandlebars = require('express-handlebars')




module.exports = function(app){
    app.use(morgan('dev')) // logging agent
    dotenv.config({ path:'../config.env'}); // environ variable configuration 
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(session({
        secret:process.env.SECRETE,
        resave:true,
        saveUninitialized:true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    setPassport()
    app.use(expressValidator())

    global.User = require('../models/user')
    global.Video = require('../models/Video')

    app.use('/',mainRoute)

    app.engine('handlebars', expressHandlebars.create({
        'defaultLayout':'main',
        'layoutsDir':app.get('views') + '/layouts'
    }).engine)
    // app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'handlebars');


    return app
}