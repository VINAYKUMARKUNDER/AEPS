const jwt = require("jsonwebtoken");
const secretKey = "aaaaaaaaaaaaa";

module.exports = {
  generateToken: (user) => {
    const token = jwt.sign(user, secretKey, { expiresIn: "1h" });
    return token;
  },

  verifyToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, 'vinay', (err, decoded) => {
        if (err) {
          return res.json({
            message: "Invalid Token...",
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({
        message: "Access Denied! Unauthorized User",
      });
    }
  },
};
