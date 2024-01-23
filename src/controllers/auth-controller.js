const jwtUtils = require('../utils/jwt-utils');
const users = require('../data/users');

const authController = {
  login: (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(404)
        .json({ error: 'Username and/or password is required' });
    }
    const user = users.find((u) => u.username === username);
    if (!user || user.password !== password) return res.status(401).json({ message: 'Invalid username or password' });
    const token = jwtUtils.generateToken(user);
    return res.status(200).json({ token });
  },
};

module.exports = authController;
