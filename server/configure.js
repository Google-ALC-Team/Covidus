
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
    app.use(expressValidator())

    global.User = require('../models/user')

    app.use('/',mainRoute)


    return app
}