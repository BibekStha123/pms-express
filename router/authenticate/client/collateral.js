const express = require("express");
const router = express.Router();
const Collateral = require('../../../models/collateral');

router.get('/', (req, res) => {
    Collateral.find()
    .then( collaterals => {
        res.send({
            collaterals
        })
    })
    .catch( err => {
        res.send(err)
    })
})

router.post('/', (req, res) => {
    const collateral = new Collateral({
        "name" : req.body.name,
        "amount" : req.body.amount,
        "status" : "Pending",
    });

    //store current collateral
    collateral.save()
    .then(collateral => {
        res.json({
            "message": "Collateral added successfully.",
            "collateral": collateral
        })
    })
    .catch(err => {
        res.status(400).send(err)
    })

    // add the collateral to existing
    

})

module.exports = router;