const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
// initialize the app

const app = express();
//

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

//using methodoverride
app.use(methodOverride('_method'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// set the port, either from an environmental variable or manually

const port = process.env.PORT || 3000;

// tell the app where to serve
app.listen(port, () => {
  console.log(`Listening on port ${port}`);

});

// index route
app.get('/', (req, res) => {
  res.render('index', {
    message: "welcome to the world of EJS"
  })
});

// import my todos route
const todosRoutes = require('./Routes/todos-routes');
app.use('/todos', todosRoutes);
//error handler
app.get('*', (req,res) => {
  res.status(404).send('not found!');
})
