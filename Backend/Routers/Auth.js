const express = require('express')
const AuthController = require('../Controllers/Auth')
const route = express.Router()

route.post('/register', AuthController.RegisterUser)
route.post('/login', AuthController.LoginUser)
route.get('/profile/:id', AuthController.getUserProfile)
route.post('/profile/:id', AuthController.createUserProfile)

module.exports = route