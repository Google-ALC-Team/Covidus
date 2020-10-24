const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const facebookStrategy = require('passport-facebook').Strategy
const googleStrategy = require('passport-google-oauth20')
const nodemailer = require('nodemailer')
const config = require('../config')
const UserModel = require('../models/user')
const dotenv = require('dotenv')



module.exports = function(){
    passport.serializeUser(function(user,done){
        done(null,user._id)
    });
    
    passport.deserializeUser(function(id,done){
        User.findOne({_id:id}, function(err,user){
            done(err,user)
        })
    });
    
    passport.use(new LocalStrategy({
        usernameField:'email'
    },
    function(username,password,done){
        User.findOne({email:username}, function(err,user){
            if(err) return done(err);
            if(!user){
                return done(null,false, {
                    message: 'Incorrect username or password'
                })
                
            }
            if(!user.validPassword(password)){
                return done(null, false, {
                    message:"Incorrect username or password"
                })
            }
            return done(null,user)
            
        })
    }
    
    ))
    

    dotenv.config({ path:'../config.env'});

    passport.use(new facebookStrategy({
        clientID: process.env.FACEBOOK_ID,
        clientSecret:process.env.FACEBOOK_SECRETE ,
        callbackURL: "http://localhost:4000/auth/facebook/callback",
        profileFields: ['id', 'displayName', 'photos', 'email']
    
      },
        function(token, refreshToken,profile,done){
            User.findOne({'facebookid':profile.id}, function(err,user){
                console.log(profile)
                if(err) return done(err);
    
                if(user){
                    return done(null, user)
                }else{
                    User.findOne({email: profile.emails[0].value}, function(err,user){
                        if(user){
                            user.facebookid = profile.id
                            return user.save(function (err) {
                                if(err) return done(null,false,{message:"can't save user info"});
                                return done(null,user)
                                
                            })
    
                        }
                        var userId = Math.floor(Math.random() * 99999999).toString();
                        var user = new User();
                        user.name = profile.displayName;
                        user.email = profile.emails[0].value;
                        user.facebookid = profile.id
                        user.password = user.encryptPassword(userId)
                        user.save(function(err){
                            if(err) return done(null, false, {message:"can't save user info"});
                            var transport = nodemailer.createTransport(config.mailer)
                            var mailOptions = {
                                from:'Covidus <noreply@covidus.com>',
                                to:profile.emails[0].value,
                                subject:'Account registration successful',
                                html:`your password is ${userId}`,
    
                            }
                            transport.sendMail(mailOptions,function(error, info){
                                if(error){
                                    return console.log(error)
                                }
                                console.log(info)
                                res.send('registered')
                            })
                            return done(null,user)
                            
                        });
                    })
                }
            });
        }
      ));


      passport.use(new googleStrategy({
          clientID: process.env.GOOGLE_CLIENTID,
          clientSecret:process.env.GOOGLE_SECRETE,
          callbackURL:'http://localhost:4000/auth/google/callback',
          profileFields:['id','displayName','email']

      },function(accessToken, profile, done){
          console.log(profile)
          UserModel.findOrCreate({googleid:profile.id},function(err,user){
            //   if(err) return done(err)

            //   if(user){
            //       console.log(user)
            //       return done(null, user)
                 
            //   }else{
            //     User.findOne({googleId:profile.id},function(err,user){
            //         console.log(user)
            //         return done(null, user);
            //     })
            //   }
            return done(err, user)
          })
      }
      ));

      passport.use(new TwitterStrategy({
        consumerKey: TWITTER_CONSUMER_KEY,
        consumerSecret: TWITTER_CONSUMER_SECRET,
        callbackURL: "http:4000/auth/twitter/callback"
      },
      function(token, tokenSecret, profile, cb) {
        User.findOrCreate({ twitterId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }
    ));
    
}

// passport.use(new facebookStrategy({

// },
// function({})))


