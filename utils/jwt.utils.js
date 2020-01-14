const jwt = require("jsonwebtoken");
const expressJwt = require('express-jwt');

const JWT_SIGN_SECRET =
  "k6e9v2j5r4f3yjbt8ht1fe7htht67fefu82gt6e3fe1ngd2dgrr54eez24fzgr10";
  

const isAuthenticated = expressJwt({secret: JWT_SIGN_SECRET });

module.exports = {
  generateTokenForUser: function(userData) {
    return jwt.sign(
      {
        userId: userData.id,
        username: userData.username
      },
      JWT_SIGN_SECRET,
      {
        expiresIn: "1h"
      }
    );
  },
  isAuthenticated 
};