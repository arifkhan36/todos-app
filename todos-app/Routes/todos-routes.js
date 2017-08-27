const express = require('express');
const todosRoutes = express.Router();
const todosController = require('../controllers/todos-controller');

todosRoutes.get('/', todosController.index);





  todosRoutes.get('/add',(req, res) => {
    res.render('todos/todos-add');
 });

todosRoutes.get('/:id', todosController.show);
module.exports = todosRoutes;
