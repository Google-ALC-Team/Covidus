
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
const multer = require('multer')
const cors = require('cors')


const swaggerjsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerOptions = {
    swaggerDefinition: {
        
        info: {
            title: 'Covidus Api',
            description: 'Covidus Api documentation',
            contact: {
                servers: ["http://localhost:4000"]
            }
        }
    },
    // path to the api docs
    apis: ["../routes/index.js"]
}
const document = require('../swagger.json')


//const swaggerDocs = swaggerjsdoc(swaggerOptions)



module.exports = function(app){



    
    app.use(morgan('dev')) // logging agent
    app.use(cors())
    dotenv.config({ path:'../config.env'}); // environ variable configuration 
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    app.use(multer({dest: './public/upload/temp'}).single('file')); /// enables image uploads
    app.use('/public/', express.static(path.join(__dirname ,'../public'))); 
     app.use(session({
        secret:process.env.SECRETE,
        resave:true,
        saveUninitialized:true
    }));
    app.use('/public/', express.static(path.join(__dirname ,'../public'))); 
    app.use(passport.initialize());
    app.use(passport.session());
    setPassport()
    app.use(expressValidator())

    global.User = require('../models/user')
    global.Video = require('../models/Video')
    global.Contact = require('../models/contact')

    
   
    app.use('/',mainRoute)
    app.use('/api',swaggerUi.serve, swaggerUi.setup(document))
    

    app.engine('handlebars', expressHandlebars.create({
        'defaultLayout':'main',
        'layoutsDir':app.get('views') + '/layouts'
    }).engine)
    // app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'handlebars');


    return app
}