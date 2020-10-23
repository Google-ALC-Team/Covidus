const nodemailer = require('nodemailer');
const passport = require('passport');
const config = require('../config')
const facebookStrategy = require('passport-facebook').Strategy
const userSchema = require('../models/user')



module.exports = {

    signup:function(req,res){
        req.checkBody('name', ' Name field cannot be empty').notEmpty();
        req.checkBody('name', 'only letters are allowed for the First Name').isAlpha();
        req.checkBody('email', 'Email cannot be empty').notEmpty();
        req.checkBody('email', 'Please enter a valid Email Address').isEmail()
        req.checkBody('password', 'password is re quired').trim().notEmpty();
        req.checkBody('password', 'password should at least 8 character').isLength({min:8});


        var errors = req.validationErrors()

        if(errors){
            res.json(errors);
            console.log(errors)
        }else{
            userSchema.findOne({email:req.body.email}, function(err,user){
                if(err){
                    res.send(err)
                }if(user){
                    res.send('User with the Email Already Exist')
                }else{
                    let newUser = new User()
                    newUser.firstname = req.body.firstname;
                    newUser.lastname = req.body.lastname;
                    newUser.email = req.body.email;
                    newUser.password = newUser.encryptPassword(req.body.password)

                    newUser.save(function(err){
                        if(err){
                            console.log(err)
                        }else{
                            var transport = nodemailer.createTransport(config.mailer)
                            var mailOptions = {
                                from:'Covidus <noreply@covidus.com>',
                                to:req.body.email,
                                subject:'Account registration successful',
                                html:'html content will be here',
    
                            }
                            transport.sendMail(mailOptions,function(error, info){
                                if(error){
                                    return console.log(error)
                                }
                                console.log(info)
                                res.json({message:'Account registered successfully'})
                            })

                            
                        }
                       
                       
                    })
                }
            })
        }

      
    },
    login:function(req,res){
        passport.authenticate('local-login',{
            successRedirect:'/user',
            failureRedirect:"/login"
        })

    },
    
    facebookAuth:passport.authenticate('facebook',{
        scope:"email"
    }),
    callback:passport.authenticate('facebook',{
        successRedirect:'/user',
        failureRedirect:'/login'
    }),
    googleAuth:passport.authenticate('google', {
        scope:['profile','email']
    }),
    googleCallback:passport.authenticate('google',{
        successRedirect:'/user',
        failureRedirect:'/login'
    })



}