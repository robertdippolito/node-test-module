var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // Check if the email already exists
  db.saveUser({
    //ES6: you can just email, password instead of email: email etc..
    email: email,
    password: password
  });
  // Send the welcome email
};
