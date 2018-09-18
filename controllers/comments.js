const express = require('express');
const router = express.Router();

// PATH TO COMMENT MODEL
const Comment = require('../models/comment');

// ROUTE : CREATE COMMENT
router.post('/movies/:movieId/reviews/:id/comments', (req, res) => {
  let jsonData = req.body;
  let commentObject = {};
  // looping through the data from the response received
  for(var index = 0; index < jsonData.length; index++){
    commentObject[jsonData[i]['name']] = jsonData[i]['value'];
  }
  //console.log(commentObject)
  Comment.create(req.body).then(comment => {
      res.status(200).send({ comment: comment});
    }).catch(err => {
      res.status(400).send({ err: err});
    });
});


// ROUTE: DELETE COMMENT
router.delete('/movies/:movieId/reviews/comments/:id', (req, res) => {
   Comment.findByIdAndRemove(req.params.id)
    .then(comment => {
      res.redirect(`/movies/:movieId/reviews/${comment.movieId}`);
    }).catch(err => {
      console.log(err.message);
    });
});

module.exports = router;
