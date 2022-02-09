const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.post('/register', (req, res) => {
    const user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    user.role = "client";

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        user.password = hash;

        user.save()
            .then(newUser => {
                res.status(200).json({
                    "Message": "User created",
                    "user": newUser
                })
            })
            .catch(error => {
                res.status(400).send(error);
            })
    })
});

router.get('/login', (req, res) => {
    res.send("login")
});

module.exports = router;