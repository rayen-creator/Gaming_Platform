const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
//MongoDB connection 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Gaming', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection
    .once("open", () => {
        console.log("Connected")
    })
    .on("error", error => {
        console.log("Your error ", error);
    })

//#region import models
const User = require('./models/user');
//#endregion

//#region Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
//#endregion Security configuration

//#region create express application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//#endregion create express application


module.exports = app;