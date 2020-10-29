
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const _ = require('lodash')
const bcyrpt = require('bcrypt')
const crypto = require('crypto')
const async = require('async')
const config = require('../config')
const hbs = require('nodemailer-express-handlebars')
const hogan = require('hogan.js')
const fs = require('fs')
const template = fs.readFileSync('./controllers/template/changepassword.handlebars','utf-8')

var compileTemplate = hogan.compile(template)


module.exports = {

    forgotPassword: function (req, res) {
        async.waterfall([
            function (done) {
                crypto.randomBytes(100, function (err, buff) {
                    var token = buff.toString('hex')
                    done(err, token)
                })
            },
            function (token, done) {
                User.findOne({ email: req.body.email }, function (err, user) {
                    if (!user) {
                        return res.status(400).json({ error: "No account With the email address" })
                    }

                    user.resetPasswordToken = token +'-'+ user.name;
                    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

                    user.save(function (err) {
                        console.log(user)
                        done(err, token, user)
                    })
                })
            },
            function (token, user, done) {
                const link = `href="${process.env.CLIENT_URL}/passwordreset/${token}-${user.name}"> ${process.env.CLIENT_URL}`
                var transport = nodemailer.createTransport(config.mailer)
                var mailOptions = {
                    from:'Covidus 📧 <noreply@covidus.com>',
                    to:req.body.email,
                    subject:'Password Reset',
                    html:compileTemplate.render({name:user.name,link:link})
                    
                   // html:`pls click on the link to activate your account <a href="http://localhost:4000/activate/${token}></a>`,

                }
                console.log(user.name)
                transport.sendMail(mailOptions,function(error, info){
                    if(error){
                        return console.log(error)
                    }
                    console.log(info)
                    res.json({message:'Account registered successfully'})
                })
               

            }
        ], function (err) {
            if (err) {
                return console.log(err)
            } res.redirect('/')
        })

    },
    resetPassword: function (req, res) {

        User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
            if (!user) {
                res.json({ error: 'password rest token is invalid' })
            } if (user) {
                res.render('login', {
                    token: req.params.token
                })
                console.log(user)

            }
        })


    },
    resetpassword1: function (req, res) {

        async.waterfall([
            function (done) {
                User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
                    if (!user) {
                        res.json({ error: "password reset token is invalid" })
                    } if (user) {
                        if (req.body.password === req.body.password2) {
                            if (user) {
                                user.password = user.encryptPassword(req.body.password)
                                user.resetPasswordToken = undefined;
                                user.resetPasswordExpires = undefined;
                                console.log(req.body.password + user.password, 'a messafeooooo')

                                user.save(function (err) {
                                    done(err, user,)
                                    res.redirect('/')
                                })

                            } else {
                                res.json({ error: "password does not march" })
                            }
                        }

                    }
                })
            },
            function (user, done,) {
                var transport = nodemailer.createTransport(config.mailer)
                var mailOptions = {
                    from:'Covidus 📧 <noreply@covidus.com>',
                    to:req.body.email,
                    subject:'Password Reset',
                    html:compileTemplate.render({name:user.name,link:link})
                    
                   // html:`pls click on the link to activate your account <a href="http://localhost:4000/activate/${token}></a>`,

                }
                console.log(user.name)
                transport.sendMail(mailOptions,function(error, info){
                    if(error){
                        return console.log(error)
                    }
                    console.log(info)
                    res.json({message:'Password changed successfully'})
                    done(error)
                })
               

            }
        ])
    }

}
    // forgotPassword:function(req,res){
    //     const email = req.body.email

    //     user.findOne({email:email}, function(err,user){
    //         if(!user){
    //             res.json({message:'user does with the email does not exist'})
    //         }if(user){
    //             const token = jwt.sign({_id:user._id}, process.env.RESET_PASSWORD_KEY,{expiresIn:"20m"})
    //             const data = {
    //                 from: 'noreply@covidus.com',
    //                 to:email,
    //                 subject:'Password reset link',
    //                 html:`
    //                     <h2> Please click on the link to reset your password</h2>
    //                     <p2>${process.env.CLIENT_URL}/passwordreset/${token}
    //                 `
    //             };

    //             return User.updateOne({resetLink:token},function(err,success){
    //                 if(err){
    //                     return res.status(400).json({error:'reset passowrd link error'})
    //                 }else{

    //                     var transport = nodemailer.createTransport(config.mailer)

    //                         transport.sendMail(data,function(error, info){
    //                             if(error){
    //                                 return console.log(error)
    //                             }
    //                             console.log(info)
    //                             res.status(200).json({message:`An email has been sent to ${email}, kindly reset your `})
    //                         })

    //                 }
    //             })

    //         }
    //     })
    // },
    // resetPassword:function(req,res){
    //     const {resetLink, newPass} = req.body
    //     if(resetLink){
    //         jwt.verify(resetLink,process.env.RESET_PASSWORD_KEY, function(error, decodeData){
    //             if(error){
    //                 return res.status(401).json({
    //                     error:"Incorrect token or it has expired"
    //                 })
    //             }else{
    //                 User.findOne({resetLink:resetLink}, function(error,user){
    //                     if(error || !user){
    //                         return res.status(400).json({error:'user with the token does not exist'})
    //                     }
    //                     const objs = {
    //                         passowrd: newPass
    //                     }

    //                     user = _.extend(user,object)
    //                     user.save(function(err,result){
    //                         if(err){
    //                             return res.status(400).json({error:"reset password error"})
    //                         }else{
    //                             return res.status(200).json({message:"Your password has been change"})
    //                         }
    //                     })




    //                 })
    //             }
    //         })
    //     }else{
    //         return res.status(401).json({error:'authentication failed'});

    //     }
    // }



