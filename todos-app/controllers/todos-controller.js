const Todos = require('../models/todos');
const todosController = {};

todosController.index = (req, res) => {
  Todos.findAll()
  .then(todos => {
    res.render('todos/todos-index',{
      message: 'ok',
      data: todos,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};

todosController.show = (req, res) => {
  Todos.findById(req.params.id)
    .then(todos => {
      res.render('todos/todos-single',{
         message: 'ok',
        data: todos,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};





module.exports = todosController;
