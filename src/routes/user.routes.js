const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/users', userController.createUser);      // Create user
router.get('/users', userController.getAllUsers);      // Get all users
router.get('/users/:id', userController.getUserById);  // Get user by ID
router.put('/users/:id', userController.updateUser);   // Update user
router.delete('/users/:id', userController.deleteUser);// Delete user

module.exports = router;
