const nodemailer = require('nodemailer');
const passport = require('passport');
const config = require('../config')



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
            console.log(error)
        }else{
            user.findOne({email:req.bdoy.email}, function(err,user){
                if(err){
                    throw err
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
                                res.send('registered')
                            })

                            
                        }
                       
                       
                    })
                }
            })
        }

      
    },
    
    facebookAuth:passport.authenticate('facebook',{
        scope:email
    }),
    callback:passport.authenticate('facebook',{
        successRedirect:'/user',
        failureRedirect:'/login'
    })


}