const express = require('express');
const router =  express.Router();

// PATH TO MODELS
const Review = require('../models/review');
const Comment = require('../models/comment');

// ROUTE : NEW
router.get('/movies/:movieId/reviews/new', (req, res) => {
  res.render('reviews-new', { movieId: req.params.movieId });
});

// ROUTE : CREATE
router.post('/movies/:movieId/reviews', (req, res) => {
  Review.create(req.body).then((review) => {
    res.redirect(`/movies/${review.movieId}`);
  }).catch((err) => {
    console.log(err.message);
  })
})

// ROUTE : SHOW
router.get('/movies/:movieId/reviews/:id', (req, res) => {
  Review.findById(req.params.id)
    .then( review => {
      Comment.find({ reviewId: review._id })
        .then(comments => {
            res.render('reviews-show', { review: review, comments: comments });
          });
        }).catch((err) => {
          console.log(err.message);
        });
      });


// ROUTE : EDIT
router.get('/movies/:movieId/reviews/:id/edit', (req, res) => {
  Review.findById(req.params.id, (err, review) => {
    res.render('reviews-edit', {review: review });
  }).catch(err => { console.log(err) });
});

// ROUTE : UPDATE
router.put('/movies/:movieId/reviews/:id', (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body)
    .then(review => {
      res.redirect(`/movies/${review.movieId}/reviews/${review._id}`)
    }).catch(err => {
      console.log(err.message)
    });
});

// ROUTE : DELETE
router.delete('/movies/:movieId/reviews/:id', (req, res) => {
  Review.findByIdAndRemove(req.params.id)
    .then(function (review) {
      res.redirect(`/movies/${req.params.movieId}`);
    }).catch(function(err){
      console.log(err.message);
  });
});

module.exports = router;
