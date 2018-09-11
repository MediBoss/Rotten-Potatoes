
const express = require('express');
const router = express.Router();


const Review  = require('../models/review');

// ROUTE : INDEX
/*
router.get('/', (req, res) => {
  Review.find()
    .then(reviews => {
      res.render('reviews-index', { reviews: reviews});
    }).catch(error => {
      console.log(error);
    });
});
*/
module.exports = router;
