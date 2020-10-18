var express = require('express');
var router = express.Router()
const signup = require('../controllers/signup')





router.get('/', function(req,res){
    res.render('home')
})
router.route('/login')

router.post('/signup', signup.signup)
router.post('/authUser',signup.login)
router.get('/auth/facebook', signup.facebookAuth);
router.get('/auth/facebook/callback',signup.callback)
router.get('/auth/google',signup.googleAuth)
router.get('/auth/google/callback',signup.googleCallback)



module.exports = router