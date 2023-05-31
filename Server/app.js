

require('dotenv').config();
const jwt = require('jsonwebtoken');
const { modulePermissions } = require('./Jwt/Auth/config');


const  checkTokenAndAccess=(req, res, next)=> {
  const token = req.headers.authorization; 

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 

    const department = decoded.department;
    const modulesAllowed = modulePermissions[department];

    if (!modulesAllowed) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.modulesAllowed = modulesAllowed;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}
