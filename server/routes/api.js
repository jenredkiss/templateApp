const express = require('express');
const router = express.Router();
const jwt  = require('jsonwebtoken');
const config = require('./../config');
const testUser = {
  'id': 1,
  'name': 'admin',
  'password': 'admin'
};

router.post('/authenticate', function(req, res){
  if(req.body.name != testUser.name) {
    res.json({ success: false, message: 'Wrong username!'});
  }else {
    if(req.body.password != testUser.password) {
      res.json({ success: false, message: 'Wrong password!'});
    }

    var user = {
      'name': req.body.name,
      'password': req.body.password // pasword to be hashed before passing to token
    }

    var token = jwt.sign(user, config.secret, {
      'expiresIn' : 86400  // expires in 24 hours
    });

    // return the information including token as JSON
    res.json({
      success: true,
      message: 'Enjoy your token!',
      token: token
    });
  }
});

router.use(function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, config.secret, function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;    
          next();
        }
      });

    } else {
      // if there is no token
      // return an error
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      });
      
    }
  });

  router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the coolest API on earth!' });
  });

  router.get('/users', (req, res) => {
    res.json(testUser);
  });

module.exports = router;