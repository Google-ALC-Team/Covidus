var express = require('express');
var router = express.Router()
const signup = require('../controllers/signup')





router.get('/', function(req,res){
    res.send('home')
})

router.get('/signup', signup.signup)
router.post('/authUser',signup.login)
router.get('/auth/facebook', signup.facebookAuth);
router.get('/auth/facebook/callback',signup.callback)



module.exports = router