const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

// *********** TOKEN GENERATOR ***********

module.exports = ( params = {} ) => {
   return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}
