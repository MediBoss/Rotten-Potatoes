    // IMPORTING MODULES AND OBJECTS
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

// MONGODB CONNECTION
mongoose.connect('mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride('_method'))

  // VIEWS SET UP
let exphds = require('express-handlebars');
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
    res.redirect(`/reviews/${review._id}`)
  }).catch((err) => {
    console.log(err.message);
  })
})

// ROUTE : SHOW
app.get('/revies/:id', (req, res) => {// fix that
  Review.findById(req.params.id).then((review) => {
    res.render('reviews-show', { review: review })
  }).catch((err) => {
    console.log(err.message);
  })
})

// ROUTE : EDIT
app.get('/reviews/:id/edit' function (req, res) {
  Review.findById(req.params.id, function(err, review) {
    res.render('reviews-edit', { review: review});
  })
})


// ROUTE : UPDATE
app.put('/reviews/:id', (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body).then(review => {
    res.redirect(`/reviews/${review._id}`)
  })
  .catch(err => {
    console.log(err.message)
  })
})

app.listen(3000, () => {
  console.log('App listening on Port 3000')
})
