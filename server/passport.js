const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const facebookStrategy = require('passport-facebook').Strategy

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


// passport.use(new facebookStrategy({

// },
// function({})))

passport.use(new facebookStrategy({
    clientID: 677002629595937,
    clientSecret: "eb4b3d2c97310f2a061ee0124386b15c",
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email']

  },
    function(token, refreshToken,profile,done){
        User.findOne({'facebookid':profile.id}, function(err,user){
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
                    var user = new User();
                    user.name = profile.displayName;
                    user.email = profile.emails[0].value;
                    user.facebookid = profile.id
                    user.save(function(err){
                        if(err) return done(null, false, {message:"can't save user info"});
                        return done(null,user)
                    });
                })
            }
        });
    }
  ));
