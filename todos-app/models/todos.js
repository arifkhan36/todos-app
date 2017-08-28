const db = require('../db/config');
const Todos ={};

Todos.findAll = () => {
  return db.query('SELECT * FROM todos');

}
Todos.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM todos
    WHERE id = $1
  `, [id]);
}

Todos.create = (todos) => {
  return db.one(`
    INSERT INTO todos
    (name,category, author)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [todos.name, todos.category, todos.author]);
}

Todos.update = (todos, id) => {
  return db.one(`
    UPDATE todos SET
    name = $1,
    category = $2,
    author = $3
    WHERE id = $4
    RETURNING *
  `, [todos.name, todos.category, todos.author, id]);
}

Todos.destroy = (id) => {
  return db.none(`
    DELETE FROM todos
    WHERE id = $1
  `, [id]);
}

module.exports = Todos;
