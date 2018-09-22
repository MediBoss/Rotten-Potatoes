
// IMPORTING EXTERNAL MODULES NEEDED
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

// IMPORTING FILE MODULES
const reviews = require('./controllers/reviews');
const comments = require('./controllers/comments');
const movies = require('./controllers/movies');
const admin = require('./controllers/admin');


// DATABASE CONNECTION TO HEROKU CLOUD DATABASE THROUGH MONGOOSE
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rotten-potatoes", {useNewUrlParser: true});

// VIEWS SET UP
var exphds = require('express-handlebars');
app.engine('handlebars', exphds({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//MIDDLEWARE SET UP
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(movies);
app.use(reviews);
app.use(comments);
app.use(admin);
app.use(express.static('public'));


// SERVER BOOTING UP

module.exports = app.listen(3000, () => {
  console.log('Server listening on Port 3000')
});
