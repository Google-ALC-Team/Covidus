let mongoose = require('mongoose')
let Schema = mongoose.Schema;
let bcrypt = require('bcrypt');
let saltRound = 10;



let UserSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true;
    },
    password:{
        type:String
    },
    dateCreated:{
        type:Date,
        "default":DataCue.now()
    }

    
})


UserSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

UserSchema.methods.checkPassword = function(guessPassword){
    return bcrypt.compareSync(guessPassword, this.password)
}

module.exports = mongoose.model('user', UserSchema)