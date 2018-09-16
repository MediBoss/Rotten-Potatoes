
    // IMPORTING MODULES NEEDED
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

// DATABASE CONNECTION TO MONGODB THROUGH ODM MONGOOSE
mongoose.connect('mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});

  // VIEWS SET UP
var exphds = require('express-handlebars');
app.engine('handlebars', exphds({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// IMPORT ROUTERS
const reviews = require('./controllers/reviews');
const comments = require('./controllers/comments');
const movies = require('./controllers/movies');
const admin = require('./controllers/admin');

  //MIDDLEWARE SET UP
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(movies);
app.use(reviews);
app.use(comments);
app.use(admin);


// SERVER LISTENING

module.exports = app.listen(3000, () => {
  console.log('Server listening on Port 3000')
});
