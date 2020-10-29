module.exports = function(req,res,next){
    if(req.isAuthenticated){
        return next()
    }else{
        req.session.loginMessage = {
            message:'You created an account successfully',
            type:'success'
        }
        res.render('back')
    }
}