
    // IMPORTING MODULES AND OBJECTS
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

// DATABASE CONNECTION
mongoose.connect('mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});

  // VIEWS SET UP
var exphds = require('express-handlebars');
app.engine('handlebars', exphds({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// ROUTERS
const home = require('./controllers/home');
const reviews = require('./controllers/reviews');
const comments = require('./controllers/comments');
const movies = require('./controllers/movies');

  //ROUTES MIDDLEWARE SET UP
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/', movies);
app.use('/reviews', reviews);
app.use('/reviews/comments', comments);


// SERVER LISTENING

module.exports = app.listen(3000, () => {
  console.log('App listening on Port 3000')
});
