const nodemailer = require('nodemailer');
const passport = require('passport');
const config = require('../config')
const facebookStrategy = require('passport-facebook').Strategy
const userSchema = require('../models/user')
const crypto = require('crypto')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')
const hogan = require('hogan.js')
const fs = require('fs')
const template = fs.readFileSync('./controllers/template/email.handlebars','utf-8')
var compileTemplate = hogan.compile(template)
const async = require('async')
// console.log(template)


module.exports = {
    
    signup:function(req,res){
        
        req.checkBody('name', ' Name field cannot be empty').notEmpty();
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
                    
                    crypto.randomBytes(40,function(err,buf){
                        token = buf.toString('hex')

                    let newUser = new User()
                    newUser.name = req.body.name;
                    newUser.email = req.body.email;
                    newUser.password = newUser.encryptPassword(req.body.password)
                    newUser.activeToken = token,
                    newUser.activeExpires =   Date.now() + 1500000

                    newUser.save(function(err,user){
                        if(err){
                            console.log(err)
                        }else{
                            const link = `http://localhost:4000/activate/${token}`
                            var transport = nodemailer.createTransport(config.mailer)
                            const welcome = `We're excited to have you get started. First, you need to confirm your account. Just press the button below.`
                            var mailOptions = {
                                from:'Covidus 📧 <noreply@covidus.com>',
                                to:req.body.email,
                                subject:'Account Registration Successful',
                                html:compileTemplate.render({name:user.name,link:link,welcome:welcome})
                                
                               // html:`pls click on the link to activate your account <a href="http://localhost:4000/activate/${token}></a>`,
    
                            }
                            console.log(user.name)
                            transport.sendMail(mailOptions,function(error, info){
                                if(error){
                                    return console.log(error)
                                }else{

                                    User.updateOne({email:req.body.email},{
                                        $push:{"notifications":{
                                            message:'Account registration successfull'
                                        }},
                                        $inc:{totalnotification:1}
                                    },function(err,data){
                                        if(err){
                                            console.log('error for increment' ,err)
                                        }else{
                                            console.log(data)
                                        }
                                    })
                                    console.log(info)
                                    res.json({message:'Account registered successfully'})

                                }
                                
                            })

                            
                        }
                       
                       
                    })
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
        successRedirect:'/home',
        failureRedirect:'/login'
    }),
    googleAuth:passport.authenticate('google', {
        scope:['profile','email']
    }),
    googleCallback:passport.authenticate('google',{
        successRedirect:'/user',
        failureRedirect:'/login'
    }),
    twitterAuth:passport.authenticate('twitter',{
        scope:"email"
    }),
    twitterCallBack:passport.authenticate('twitter',{
        successRedirect:'/user',
        failureRedirect:'/'
    })





}