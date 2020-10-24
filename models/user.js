let mongoose = require('mongoose')
let Schema = mongoose.Schema;
let bcrypt = require('bcrypt');
let saltRound = 10;
var ObjectId = Schema.ObjectId



let UserSchema = new Schema({
    name:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true
    },
    country:{
        type:String,
        // required:true
    },
    password:{
        type:String
    },
    dateCreated:{
        type:Date,
        "default":Date.now()
    },
    facebookid:{
        type:String
    },
    googleid:{
        type:String
    },
    nofications:[],
    videos: [
    {
        _id:String,
        content:String,
        filename:String,
        title:String

    }   
    ],
    resetLink: {
        data:String,
        default:''
    }

    

    
})


UserSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

UserSchema.methods.checkPassword = function(guessPassword){
    return bcrypt.compareSync(guessPassword, this.password)
}

module.exports = mongoose.model('user', UserSchema)