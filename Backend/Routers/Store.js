const express = require('express');
const StoreController = require('../Controllers/Store');
const JWTAuthMiddleware = require('../Middleware/Authentication')
const route = express.Router();

route.post('/createStore/:id/store', JWTAuthMiddleware.verifyToken, StoreController.CreateStore);
route.get('/getStore', StoreController.getStores)

module.exports = route;