var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    // Check if email already exist
    // Save the user to the database
    db.saveUser({email,password});
    // send the welcome email
};