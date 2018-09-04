const express = require('express');
const router = express.Router();

// PATH TO COMMENT MODEL
const Comment = require('../models/comment');

// ROUTE : CREATE
router.post('/reviews/comments', (req, res) => {
  Comment.create(req.body).then(comment => {
    res.redirect(`/reviews/${comment.reviewId}`);
  }).catch(err => {
    console.log(err.message);
  })
});

module.exports = router;
