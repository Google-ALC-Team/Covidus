const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path:'./config.env'});


// MONGO DB ENVIRONMENTAL VARIABLE
const DB = process.env.MONGODB_URI

// DATABASE CONNECTION WITH MONGOOSE
mongoose.connect(DB,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on('error', console.error.bind(console, 'Database connection Error')); /// handling the error
mongoose.connection.once('open', function(){
    console.log('connected to Database');
})


app.get('/',function(req,res){
    res.json({
        name:"name"
    })
})

// APP LISTENING AT PORT:4000
const port = app.get('port')
app.listen(process.env.PORT || 4000, function () {
    console.log(`app listening at port: `)
})








   
