
var db = require("./db.js");

module.exports.handleSignup = (email, password)=>{
    //check if the email already exist

    //save the use to db
    db.saveUser({
        email, password
    });

    //send the welcome email
};