    // importing necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var exphds = require('express-handlebars');

// Express App instance
const app = express();
// connecting to the database
mongoose.connect('mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: true}));

  // setting up client's views
app.engine('handlebars', exphds({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

  // MODEL
  const Review = mongoose.model('Review', {
    title: String,
    description: String,
    movieTitle: String,
    rating: Number
  });

// ROUTE : INDEX
app.get('/', (req, res) => {
  Review.find().then(reviews => {
      res.render('reviews-index', { reviews: reviews });
    })
    .catch(error => {
      console.log(error);
    })
})

// ROUTE : NEW
app.get('/reviews/new', (req, res) => {
  res.render('reviews-new', {});
})

// ROUTE : CREATE
app.post('/reviews', (req, res) => {
  Review.create(req.body).then((review) => {
    console.log(review);
    res.redirect(`/revies/${review._id}`);
  }).catch((err) => {
    console.log(err.message);
  })
})

// ROUTE : SHOW
app.get('/reviews/:id', (req, res) => {
  Review.findById(req.params.id).then((review) => {
    res.render('reviews-show', { review: review })
  }).catch((err) => {
    console.log(err.message);
  })
})

app.listen(3000, () => {
  console.log('App listening on Port 3000')
})
