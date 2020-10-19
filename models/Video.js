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
    userId:{
        type:ObjectId
    },
    likes:{
        type:Number,
        default:0
    }




})


module.exports = mongoose.model('videos', newVideo)
