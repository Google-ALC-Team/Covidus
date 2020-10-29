
    module.exports = function(req,res,next){
        if(req.user && req.user.isVerified) return next();
        console.log('pls actiavet')
        //return res.redirect('/account/login?next=' + req.originalUrl);
        return res.send('activate your account')
        
      }
   