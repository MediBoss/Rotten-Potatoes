// Route to the home page

const express = require('express');
const router = express.Router();

// PATH TO INSTANCE OF MODELS
const Review  = require('./models/Review');

// ROUTE : INDEX
router.get('/', (req, res) => {
  Review.find()
    .then(reviews => {
      res.render('reviews-index', { reviews: reviews});
    }).catch(error => {
      console.log(error);
    });
});

module.exports = router;
