const express = require('express');
const todosRoutes = express.Router();
const todosController = require('../controllers/todos-controller');

todosRoutes.get('/', todosController.index);

todosRoutes.post('/', todosController.create);





  todosRoutes.get('/add',(req, res) => {
    res.render('todos/todos-add');
 });

todosRoutes.get('/:id', todosController.show);
todosRoutes.put('/:id', todosController.update);
todosRoutes.delete('/:id', todosController.delete);







module.exports = todosRoutes;
