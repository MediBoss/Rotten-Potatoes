const express = require('express');
const router = express.Router();

// PATH TO COMMENT MODEL
const Comment = require('../models/comment');

// ROUTE : CREATE COMMENT
router.post('/movies/:movieId/reviews/:id/comments', (req, res) => {
  Comment.create(req.body)
    .then(comment => {
      console.log(req.body)
      res.status(200).send( {comment: comment});
    }).catch(err => {
      res.status(400).send( {error: error} )
    });
});


// ROUTE: DELETE COMMENT
router.delete('/movies/:movieId/reviews/:reviewId/comments/:id', (req, res) => {
   Comment.findByIdAndRemove(req.params.id)
    .then(comment => {
      res.status(200).send(comment);
    }).catch(err => {
      console.log(err.message);
      res.status(400).send(err)
    });
});

module.exports = router;
