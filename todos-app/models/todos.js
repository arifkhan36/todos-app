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


module.exports = Todos;
