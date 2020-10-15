const express = require('express');
const app = express();
const path = require('path')
const exhbs = require('express-handlebars')
const configure = require('./servers/configure')
const mongoose = require('mongoose')

const dotenv = require('dotenv')


dotenv.config({ path:'./config.env'});
// var  MONGODB_URI = "mongodb+srv://uchechidi:Easytech@cluster0shoppingcart-kcinc.mongodb.net/cluster0shoppingcart?retryWrites=true&w=majority";
//var MONGODB_URI = "mongodb://uchechidi:Easytech@cluster0shoppingcart-shard-00-00-kcinc.mongodb.net:27017,cluster0shoppingcart-shard-00-01-kcinc.mongodb.net:27017,cluster0shoppingcart-shard-00-02-kcinc.mongodb.net:27017/shopping?ssl=true&replicaSet=Cluster0shoppingcart-shard-0&authSource=admin&retryWrites=true&w=majority"
const DB = process.env.MONGODB_URI
mongoose.connect(DB,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on('error', console.error.bind(console, 'Database connection Error')); /// handling the error
mongoose.connection.once('open', function(){
    console.log('connected to Database');
})


app.get('/',function(req,res){
    res.json('')
})


const port = app.get('port')
app.listen(process.env.PORT || 2029, function () {
    console.log(`app listening at port: `)
})








   
