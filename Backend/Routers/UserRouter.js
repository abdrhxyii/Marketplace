const express = require('express')
const AuthController = require('../Controllers/UserController')
const route = express.Router()

route.post('/register', AuthController.RegisterUser);
route.post('/login', AuthController.LoginUser);
route.get('/profile/:id', AuthController.getUserProfile);
route.get('/verify-email', AuthController.emailVerification);
route.get('/google', AuthController.GoogleAuthentication);
route.get('/google/callback', AuthController.GoogleAuthenticationCallback);

module.exports = route