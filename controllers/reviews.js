const express = require('express');
const router =  express.Router();

// PATH TO INSTANCE OF MODELS
const Review = require('../models/review');
const Comment = require('../models/comment');

      // RESOURCEFUL ROUTING

//ROUTE : NEW
router.get('/reviews/new', (req, res) => {
  res.render('reviews-new', {});
});

// ROUTE : CREATE
router.post('/reviews', (req, res) => {
  Review.create(req.body).then( review => {
    console.log(review);
    res.redirect(`/reviews/${review._id}`)
  }).catch((err) => {
    console.log(err.message);
  });
});

// ROUTE : SHOW
router.get('/reviews/:id', (req, res) => {
  // find review
  Review.findById(req.params.id).then( review => {
    // fetch review's comments
    Comment.find({ reviewId: req.params.id }).then(comments => {
        // update the view with the data found
        res.render('reviews-show', { review: review, comments: comments })
    })
  }).catch((err) => {
    console.log(err.message);
  });
});


// ROUTE : UPDATE
router.put('/reviews/:id', (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body)
    .then(review => {
      res.redirect(`/reviews/${review._id}`)
    }).catch(err => {
      console.log(err.message)
    });
});

// ROUTE : DELETE
router.delete('/reviews/:id', (req, res) => {
  console.log('DELETE Review')
  Review.findByIdAndRemove(req.params.id)
    .then(review => {
      res.redirect('/');
    }).catch(err => {
      console.log(err.message);
  });
});

module.exports = router;
