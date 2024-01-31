const { verifyToken } = require('../utils/jwt-utils');

// Middleware to authenticate user based on JWT token
const authenticate = (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Missing Token' });
  }
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized - Invalid Token' });
  }
  return undefined;
};

module.exports = authenticate;
