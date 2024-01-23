const jwt = require('jsonwebtoken');
const { jwtSecretKey } = require('../../config');

const jwtUtils = {
  generateToken: (user) => jwt.sign({ id: user.id }, jwtSecretKey),
  verifyToken: (token) => jwt.verify(token, jwtSecretKey),
};

module.exports = jwtUtils;
