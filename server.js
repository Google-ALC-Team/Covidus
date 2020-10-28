//jshint esversion:6
const express = require('express');
const mongoose = require('mongoose');
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

app.use(session({
    secret: "Covidus App",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// DATABASE CONNECTION WITH MONGOOSE
mongoose.connect("mongodb://localhost:27017/covidus", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);
mongoose.connection.on('error', console.error.bind(console, 'Database connection Error')); /// handling the error
mongoose.connection.once('open', function () {
    console.log('connected to Database');
});

const userSchema = new mongoose.Schema({
    email: "String",
    password: "String"
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

//GET PAGES
//Home page
app.get('/', function (req, res) {
    if (req.isAuthenticated()) {
        // render visitor's home page
        res.sendFile(__dirname + "/views/home.html");
    } else {
        // render user's home page
        res.sendFile(__dirname + "/views/authhome.html");
    }
});

//Login page
app.get("/login", function (req, res) {
    // render login page
    res.sendFile(__dirname + "/views/login.html");
});

//Signup page
app.get("/register", function (req, res) {
    res.sendFile(__dirname + "/views/signup.html");
});

//Donate page
app.get("/donate", function (req, res) {
    if (req.isAuthenticated()) {
        res.sendFile(__dirname + "/views/donate.html");
    } else {
        res.redirect("/login");
    }
});

//Contact page
app.get("/contact", function (req, res) {
    if (req.isAuthenticated()) {
        res.sendFile(__dirname + "/views/contact.html");
    } else {
        res.redirect("/login");
    }
});

//Share Story page
app.get("/sharestory", function (req, res) {
    if (req.isAuthenticated()) {
        res.sendFile(__dirname + "/views/sharestory.html");
    } else {
        res.redirect("/login");
    }
});

//Information Board page
app.get("/info", function (req, res) {
    res.sendFile(__dirname + "/views/info.html");
});









// APP LISTENING AT PORT:4000
app.listen(4000, function () {
    console.log("Server started at port 4000");
});
