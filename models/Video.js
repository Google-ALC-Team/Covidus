const mongoose = require('mongoose');
const { model } = require('./user');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId



const newVideo = new Schema({
    
    title:{
        type:String
    },
    caption:{
        type:String
    },
    timeStamp:{
        type:Date,
        default:Date.now()
    },
    user:{
        id:ObjectId,
        name:{
            type:String
        }
    },
    likes:{
        type:Number,
        default:0
    },
    views:{
        type:Number,
        defult:'0'
    },
    filePath:{
        type:String
    },
    thumbnail:{
        type:String
    },
    watch:{
        type:String
    },
    hours:{
        string:Number
    },
    seconds:{
        type:Number
    },
    filename: String,
    user_id:String

    // filename:{type:String},
    // title:{type:String},
    // description:{type:String},
    // views: {type:Number,'default':0},
    // likes:{type:Number,'default':0},
    // timestamp: {type:Date, 'default':Date.now()},
    // user_id:{type:ObjectId}

    



})


module.exports = mongoose.model('video', newVideo)

