

    // IMPORTING MODULES AND OBJECTS
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

// DATABASE CONNECTION
mongoose.connect('mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});






  // VIEWS SET UP
let exphds = require('express-handlebars');
app.engine('handlebars', exphds({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// ROUTERS
const home = require('./controllers/home');
const reviews = require('./controllers/reviews');
const comments = require('./controllers/comments');

  // MODEL
  const Review = mongoose.model('Review', {
    title: String,
    description: String,
    movieTitle: String,
    rating: Number
  });

  // MIDDLEWARE SET UP
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/', home);
app.use('/reviews', reviews);
app.use('/reviews/comments', comments);


// ROUTE : NEW
app.get('/reviews/new', (req, res) => {
  res.render('reviews-new', {});
});

// ROUTE : CREATE
app.post('/reviews', (req, res) => {
  Review.create(req.body).then( review => {
    console.log(review);
    res.redirect(`/reviews/${review._id}`)
  }).catch((err) => {
    console.log(err.message);
  });
});

// ROUTE : SHOW
app.get('/reviews/:id', (req, res) => {
  Review.findById(req.params.id).then( review => {
    res.render('reviews-show', { review: review })
  }).catch((err) => {
    console.log(err.message);
  });
});


// ROUTE : EDIT
app.get('/reviews/:id/edit', (req, res) => {
  Review.findById(req.params.id, function(err, review) {
    res.render('reviews-edit', { review: review});
  });
});


// ROUTE : UPDATE
app.put('/reviews/:id', (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body)
    .then(review => {
      res.redirect(`/reviews/${review._id}`)
    }).catch(err => {
      console.log(err.message)
    });
});


// ROUTE : DELETE
app.delete('/reviews/:id', (req, res) => {
  console.log('DELETE Review')
  Review.findByIdAndRemove(req.params.id)
    .then(review => {
      res.redirect('/');
    }).catch(err => {
      console.log(err.message);
  });
});

// LISTENING
app.listen(3000, () => {
  console.log('App listening on Port 3000')
});
