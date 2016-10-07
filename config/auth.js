// var LocalStrategy = require('passport-local').Strategy;  
var User = require('../models/User.js');  
var configAuth = require('./auth.js');  

module.exports = {  
  googleAuth: {
    clientID: '1013390006553-1j3uegqltoc5rj3c3aj5jlu58nh1o3tf.apps.googleusercontent.com',
    clientSecret: 'M8LxatEjOGvDwtB1cqO0Af96',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  }
};