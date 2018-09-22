
// I NEED TO FIX THIS

const express = require('express');
const router = express.Router();

// PATH TO REVIEW MODEL
const Review = require('../models/review');

// ADMIN PAGE
router.get('/admin', (req, res) => {
    Review.find()
        .then(reviews => {
            res.render('admin', { reviews: reviews });
     })
        .catch(error => {
        console.log(error.message);
        });
    });


// ADMIND DELETE REVIEW
router.delete('admin/reviews/:id', (req, res) => {
    Review.findByIdAndDelete(req.params.id)
    .then(review => {
        res.status(200).send(review)
    })
    .catch(error => {;
        console.log(error.message)
        res.status(400).send(error);
    });
});

module.exports = router;

