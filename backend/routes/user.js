const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post("/signup", (req, res) => {
    bcrypt.hash(req.body.Password, 10).then((cryptedPwd) => {
        const user = new User({
            Firstname: req.body.Firstname,
            Lastname: req.body.Lastname,
            Email: req.body.Email,
            Password: cryptedPwd,
        });
        user.save()
            .then(
                result => {
                    res.status(201).json({
                        message: "User added successfully",
                        result: result
                    });
                })
            .catch(err => {
                res.status(500).json({
                    eror: err
                })
            });
    });

});

router.post("/login", (req, res) => {
    let gettedUser;
    User.findOne({ Email: req.body.Email })
        .then(user => {
            // console.log("USER", user);
            if (!user) {
                // 401 : authentification échouée
                // 404 : not found
                return res.status(401).json({
                    message: "Auth failed"
                })
            };
            gettedUser = user;
            console.log("Getted user", gettedUser);
            return bcrypt.compare(req.body.Password, user.Password)
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: 'Auth failed'
                })
            }
            // Create new jeton
            // secret_key: sera enregistré que sur le serveur et utilisé pour valider les requests
            const token = jwt.sign({ Email: gettedUser.Email, userId: gettedUser._id },
                'secret_key', { expiresIn: '1h' });
            console.log("Token, ", token);
            res.status(200).json({
                message: "OK",
                token: token,
                expiresIn: 3600
            })
        })
        .catch(err =>  {
            console.log("Erroe", err);
            return res.status(401).json({
                message: 'Auth failed'
            })
        })
})

module.exports = router;
// middelware : fonction qui fait l'analyse de la demande request puis décider si cette demande est autorisée ou non