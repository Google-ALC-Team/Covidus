var express = require('express');
var router = express.Router()
const signup = require('../controllers/signup')
const video = require('../controllers/video')
var formidable = require('formidable')
var fileSystem = require('fs')
var { getVideoDuration } = require('get-video-duration');
const { request } = require('http');
var path = require('path')
const os = require('os')
const controller = require('../controllers/contact')
const passwordReset = require('../controllers/forgotPass');
const { forgotPassword, resetPassword, resetpassword1 } = require('../controllers/forgotPass');
const isActive = require('../controllers/isActive')
const { verify } = require('../controllers/verifyAccount')
const isLogged = require('../controllers/isLogged');




// root route
router.get('/', function (req, res) {
    Video.find({}).limit(12).exec(function(err,videos){
        if(err){
            return res.status(404).send(err)
        }else{
            let data = {
                title: 'covidus-covid 19 travelling guide for travellers ',
                videos:videos
            }
            res.status(200).send(data)

        }
    })
    //  res.status(200).json({title:'welcome to covidus'})
    
    // res.status(200).send(data)
    
})

//infotmation about travelling restriction in a country
router.get('/covid-info', function (req, res) {
    var limit = parseInt(req.query.limit)
    console.log(limit)
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("covidus");
        dbo.collection("covidGuide").find({}).limit(limit).toArray(function (err, result) {
            if (err) throw err;
            
            res.send(result)
            db.close();
            console.log(result);
           
            
            
        });
    });

})

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
router.get('/searchCovidInfo', function(req,res){
    // var search = req.params.search
    var noMatch = null
    const regex = new RegExp(escapeRegex(req.query.search), 'gi');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("covidus");
        dbo.collection("covidGuide").find({adm0_name:regex}).toArray(function (err, result) {
            if(err){
                console.log(err)
            }else{
                if(result.length < 1){
                    noMatch = "No Match for this query, please try again"
                }
                    res.send({result:result,noMatch:noMatch})
                    db.close();
                    console.log(result);
            } 
            
        });
    });

})




router.get('/user',isLogged, function (req, res) {
    const id = req.user._id
    User.findOne({ _id: id }, function (err, user) {
        Video.find({}).limit(12).lean().exec(function (err, videos) {
            if (err) {
                console.log(err)
            } else {

                res.send({
                    title: user.name,
                    name: user.name,
                    email: user.email,
                    videos: videos


                })
            }
        })
    })

})
// route for more videos

router.get('/more-video', isActive, function (req, res) {
    Video
        .find({})
        .lean()
        .exec(function (err, videos) {
            res.send({ videos: videos })
        })
})
// login and authentication 
router.get('/login', function (req, res) {
    res.status(200).json({ title: 'User login page' })
})
router.post('/login', signup.login)

router.get('/share-story', function (req, res) {
    res.status(200).json({ title: 'Share your covid-19 story' })
})
// post route  for  video file upload 
router.post('/postVideo',isLogged, video.videoupload)




// post router for signing up account
router.post('/signup', signup.signup)

// get route for facebook auth
router.get('/auth/facebook', signup.facebookAuth);
router.get('/auth/facebook/callback', signup.callback)


// get route for google auth
router.get('/auth/google', signup.googleAuth)
router.get('/auth/google/callback', signup.googleCallback)

// twitter authentication
router.get('twiiter/auth', signup.twitterAuth)
router.get('/auth/twitter/callback', signup.twitterCallBack)

// post route  for  video file upload 
router.post('/postVideo', video.videoupload)

// route for contact
router.get('/contact', function (req, res) {
    res.status(200).json({ title: "contact" })
})

router.post('/contact/sendMessage', controller.contact)


// password reset 
router.post('/forgot', forgotPassword)
router.get('/passwordreset/:token', resetPassword)
router.post('/passwordreset/:token', resetpassword1)


// Account verification
router.get('/activate/:token', verify)



module.exports = router