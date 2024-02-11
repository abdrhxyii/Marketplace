const express = require('express')
const AuthController = require('../Controllers/Auth')
const AuthMiddleware = require('../Middleware/Auth')
const route = express.Router()

route.post('/register', AuthController.RegisterUser)
route.post('/login', AuthMiddleware, AuthController.LoginUser)

module.exports = route