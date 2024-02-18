const express = require('express')
const AuthController = require('../Controllers/Auth')
const AuthMiddleware = require('../Middleware/Auth')
const route = express.Router()

route.post('/register', AuthController.RegisterUser)
route.post('/login', AuthController.LoginUser)
route.get('/profile/:id', AuthController.getUserProfile)

module.exports = route