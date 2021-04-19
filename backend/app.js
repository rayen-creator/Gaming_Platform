const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');

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

app.use('/images', express.static(path.join('backend/images')));

//#region import models
const User = require('./models/user');
const Game = require('./models/game');

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


const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime Type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        cb(null, name + '-' + Date.now() + '.' + extension);
    }
})

app.post('/api/AddGame', multer({ storage: storage }).single('Image'), (req, res, next) => {
    console.log("req file", req.file);

    url = req.protocol + '://' + req.get('host');
    const game = new Game({
        Name: req.body.Name,
        Image: url + '/images/' + req.file.filename,
        Platform: req.body.Platform,
        Playtime: req.body.Playtime,
        Achievements: req.body.Achievements,
    });
    game.save().then(
        res.status(201).json({
            message: 'Game Added with success'
        })
    );
});


app.post("/api/signup", (req, res) => {
    bcrypt.hash(req.body.Password, 10).then((cryptedPwd) => {
        const user = new User({
            Firstname: req.body.Firstname,
            Lastname: req.body.Lastname,
            Email: req.body.Email,
            Password: cryptedPwd,
        });
        user.save().then(
            res.status(200).json({
                message: "User addes successfully",
            })
        );
    });
});




app.get('/api/GetAllGame', (req, res) => {
    Game.find((err, docs) => {
        if (err) {
            console.log('error with DB');
        } else {
            res.status(200).json({
                allgames: docs
            });
        }
    })
});



module.exports = app;