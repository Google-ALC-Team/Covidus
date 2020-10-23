let mongoose = require('mongoose')
let Schema = mongoose.Schema;



let contact = new Schema({
    name:{
        type:String,
        // required:true
    },
    country:{
        type:String,
        // required:true
    },
    
    email:{
        type:String,
        // required:true
    },
    phone:{
        type:Number
    },
    reason:{
        type:String
    },
    evidence:{
        type:String
    }
  
})




module.exports = mongoose.model('contact', contact)