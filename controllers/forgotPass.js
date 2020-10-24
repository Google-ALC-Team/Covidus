
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const _ = require('lodash')

module.exports = {
    forgotPassword:function(req,res){
        const email = req.body.email

        user.findOne({email:email}, function(err,user){
            if(!user){
                res.json({message:'user does with the email does not exist'})
            }if(user){
                const token = jwt.sign({_id:user._id}, process.env.RESET_PASSWORD_KEY,{expiresIn:"20m"})
                const data = {
                    from: 'noreply@covidus.com',
                    to:email,
                    subject:'Password reset link',
                    html:`
                        <h2> Please click on the link to reset your password</h2>
                        <p2>${process.env.CLIENT_URL}/passwordreset/${token}
                    `
                };

                return User.updateOne({resetLink:token},function(err,success){
                    if(err){
                        return res.status(400).json({error:'reset passowrd link error'})
                    }else{

                        var transport = nodemailer.createTransport(config.mailer)
                           
                            transport.sendMail(data,function(error, info){
                                if(error){
                                    return console.log(error)
                                }
                                console.log(info)
                                res.status(200).json({message:`An email has been sent to ${email}, kindly reset your `})
                            })

                    }
                })

            }
        })
    },
    resetPassword:function(req,res){
        const {resetLink, newPass} = req.body
        if(resetLink){
            jwt.verify(resetLink,process.env.RESET_PASSWORD_KEY, function(error, decodeData){
                if(error){
                    return res.status(401).json({
                        error:"Incorrect token or it has expired"
                    })
                }else{
                    User.findOne({resetLink:resetLink}, function(error,user){
                        if(error || !user){
                            return res.status(400).json({error:'user with the token does not exist'})
                        }
                        const objs = {
                            passowrd: newPass
                        }

                        user = _.extend(user,object)
                        user.save(function(err,result){
                            if(err){
                                return res.status(400).json({error:"reset password error"})
                            }else{
                                return res.status(200).json({message:"Your password has been change"})
                            }
                        })




                    })
                }
            })
        }else{
            return res.status(401).json({error:'authentication failed'});

        }
    }
}


