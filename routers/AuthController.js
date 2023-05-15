const jwt = require('jsonwebtoken');
const secretKey = 'aaaaaaaaaaaaa'; 





module.exports={


   generateToken:(user)=>{
    const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
    return token;
  },
  
  
  
  
 verifyToken:(req, res, next)=> {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      req.user = decoded;
      next();
    });
  },
}
