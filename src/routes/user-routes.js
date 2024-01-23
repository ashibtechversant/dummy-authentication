const express = require('express');
const userController = require('../controllers/user-controller');
const authenticate = require('../middleware/authenticate');

const router = express.Router();
router.use(authenticate);
router.get('/protected', userController.protectedRoute);

module.exports = router;
