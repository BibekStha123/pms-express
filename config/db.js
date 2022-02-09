const mongoose = require('mongoose');

var mongoDb = 'mongodb://127.0.0.1/pms';

const mongo = mongoose.connect(mongoDb, 
    {useNewUrlParser: true, useUnifiedTopology: true}
    ).then( () => {
        console.log("MongoDb connected")
    }).catch(( err ) => {
        console.log("Error in connecting Mongodb "+err)
    });

module.exports = mongo