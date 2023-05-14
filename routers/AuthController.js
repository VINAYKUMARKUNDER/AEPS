const jwt = require('jsonwebtoken');
const secretKey = 'aaaaaaaaaaaaa'; 


const generateToken=(user)=>{
  const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
  return token;
};

user={
  name:'vinay kumar',
  password:'Vinay@1313',
  email:'Vinay@1313'
}

const token = generateToken(user);
console.log(token)


const verifyToken=(req, res, next)=> {
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
};
