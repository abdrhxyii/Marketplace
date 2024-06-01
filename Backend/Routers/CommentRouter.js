const CommentController = require('../Controllers/CommentController');
const express = require('express');
const route = express.Router();

route.post('/:id', CommentController.CreateComment);

module.exports = route