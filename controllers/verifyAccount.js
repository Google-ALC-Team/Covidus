const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const _ = require('lodash')
const bcyrpt = require('bcrypt')
const crypto = require('crypto')
const async = require('async')
const config = require('../config')
const hogan =require('hogan.js')
const fs = require('fs')
const template = fs.readFileSync('./controllers/template/success.hbs','utf-8')
var compileTemplate = hogan.compile(template)





module.exports = {

    verify:function(req,res){
        async.waterfall([
            function(done){
                User.findOne({activeToken:req.params.token,activeExpires:{$gt: Date.now() }}, function(err,user){
                    if(user){
                        user.activeExpires = undefined
                        user.isVerified = true
                        user.activeToken = undefined
                        console.log(user)

                        user.save(function(err){
                            done(err,user)
                        })
                    }else{
                        res.send('couldnt verify your account')
                    }
                })
            },
            function(done,user){
                var link = 'http://localhost:4000/login'
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
        ],function(err){
            if(err){
                console.log(err)
            }else{
                res.send('done')
            }
        })
    }
}
//     verify:function(req,res){
//         User.findOne({activenToken:req.params.token,activeExpires:{$gt: Date.now() }}, function(err,user){
//             if(err){
//                 res.send(err)
//             }else{
//                 user.activeToken = undefined
//                 user.activeExpires = undefined
//                 user.isVerified = true 
//                 console.log(user)

//                 user.save(function(err,data){
//                     if(err){
//                         return console.error('an error occured')
//                     }else{
//                         res.send('account verified success fully')
//                     }
//                 })
//             }
            
//         })
//     }


// }


