const jwt = require('jsonwebtoken');

const { JWT_SECRET_KEY } = process.env;

// Middleware to authenticate user based on JWT token
const authenticate = (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Missing Token' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized - Invalid Token' });
  }
  return undefined;
};

module.exports = authenticate;
