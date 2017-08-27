\connect todos_db_dev;
DROP TABLE IF EXISTS todos;
CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  category VARCHAR(255),
  author VARCHAR(255)
);
