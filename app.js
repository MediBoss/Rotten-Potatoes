    // importing necessary modules
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var exphds = require('express-handlebars');

  // setting up the connection to the data base
mongoose.connect('mongodb://localhost/rotten-potatoes')

  // setting up client's views
app.engine('handlebars', exphds({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

  // Model
  const Review = mongoose.model('Review', {
    title: String
  });

// Mock array of reviews

// let reviews = [
//   { title: "Great Review"},
//   { title: "Next Review"},
//   { title: "Better Review"}
// ];

app.get('/', (req, res) => {
  Review.find()
    .then(reviews => {
      res.render('reviews-index', { reviews: reviews });
    })
    .catch(error => {
      console.log(error);
    })
})

app.listen(3000, () => {
  console.log('App listening on Port 3000')
})
