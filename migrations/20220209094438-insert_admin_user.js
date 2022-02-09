const bcrypt = require("bcrypt");
const user = require("../models/user");

module.exports = {
  async up(db, client) {
    
    const user = new user();
    user.name = "Admin";
    user.email = "admin@gmail.com";
    user.password = bcrypt.hash("password", bcrypt.genSalt(10));
    user.role = "admin";

    return user.save()
            .then((req, res) => {
              res.send("Admin created")
            }).catch((err) => {
              res.send(err);
            });
   
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
