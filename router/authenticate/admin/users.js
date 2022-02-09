const express = require("express");
const router = express.Router();
const User = require('../../../models/user');

router.get('/', (req, res) => {
    User.find()
    .then(user => {
        res.send(user)
    })
    .catch( error => {
        res.send(error)
    })
})

module.exports = router;