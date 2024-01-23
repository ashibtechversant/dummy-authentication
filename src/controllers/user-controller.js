const users = require('../data/users');

const userController = {
  protectedRoute: (req, res) => {
    const user = users.find((u) => u.id === req.user.id);
    res.json({ message: 'Protected route accessed!', user });
  },
};

module.exports = userController;
