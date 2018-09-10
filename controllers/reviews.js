const express = require('express');
const router =  express.Router();

// PATH TO MODELS
const Review = require('../models/review');
const Comment = require('../models/comment');

//ROUTE : NEW
router.get('/new', (req, res) => {
  res.render('reviews-new', {});
});

// ROUTE : CREATE
router.post('/', (req, res) => {
  Review.create(req.body).then( review => {
    res.redirect(`/reviews/${review._id}`)
  }).catch((err) => {
    console.log(err.message);
  });
});

// ROUTE : SHOW
router.get('/:id', (req, res) => {
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
router.get('/:id/edit', (req, res) => {
  Review.findById(req.params.id, (err, review) => {
    res.render('reviews-edit', {review: review });
  });
});

// ROUTE : UPDATE
router.put('/:id', (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body)
    .then(review => {
      res.redirect(`/reviews/${review._id}`)
    }).catch(err => {
      console.log(err.message)
    });
});

// ROUTE : DELETE
router.delete('/:id', (req, res) => {
  Review.findByIdAndRemove(req.params.id)
    .then(review => {
      res.redirect('/');
    }).catch(err => {
      console.log(err.message);
  });
});

module.exports = router;
