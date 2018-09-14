const express = require('express');
const router = express.Router();

// PATH TO COMMENT MODEL
const Comment = require('../models/comment');

// ROUTE : CREATE
router.post('/movies/:movieId/reviews/comments', (req, res) => {
  Comment.create(req.body)
    .then(comment => {
      res.redirect(`/reviews/${ comment.reviewId }`);
    }).catch(err => {
      console.log(err.message);
    });
});


// ROUTE: DELETE
router.delete('/movies/:movieId/reviews/comments/:id', (req, res) => {
   Comment.findByIdAndRemove(req.params.id)
    .then(comment => {
      res.redirect(`/reviews/${comment.reviewId}`);
    }).catch(err => {
      console.log(err.message);
    });
});

module.exports = router;
