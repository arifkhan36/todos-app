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
todosController.create = (req, res) => {
  Todos.create({
    name: req.body.name,
    category: req.body.category,
    author: req.body.author,
  }).then(todos => {
    res.redirect('/todos');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

todosController.update = (req, res) => {
  Todos.update({
    name: req.body.name,
    category: req.body.category,
    author: req.body.author,
  }, req.params.id).then(todos => {
    res.redirect('/todos');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};

todosController.delete = (req, res) => {
  Todos.destroy(req.params.id)
    .then(() => {
      res.redirect('/todos');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}




module.exports = todosController;
