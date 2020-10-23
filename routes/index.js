var express = require('express');
var router = express.Router()
const signup = require('../controllers/signup')
const video = require('../controllers/video')
var formidable = require('formidable')
var fileSystem = require('fs') 
var  { getVideoDuration}  = require('get-video-duration');
const { request } = require('http');
var path = require('path')




// home route
router.get('/', function(req,res){
    res.render('home')
})


router.route('/login')

// post router for signing up account
router.post('/signup', signup.signup)

// post route for login in
router.post('/authUser',signup.login)

// get route for facebook auth
router.get('/auth/facebook', signup.facebookAuth);
router.get('/auth/facebook/callback',signup.callback)

// get route for google auth
router.get('/auth/google',signup.googleAuth)
router.get('/auth/google/callback',signup.googleCallback)

// post route  for  video file upload 
router.post('/postVideo', video.videoupload)




module.exports = router