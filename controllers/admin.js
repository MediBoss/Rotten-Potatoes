
// I NEED TO FIX THIS

const express = require('express');
const router = express.Router();

// PATH TO REVIEW MODEL
const Review = require('../models/review');

router.get('/admin', (req, res) => {
    Review.find().then( reviews => {
        res.render('admin', { reviews: reviews });
    }).catch(err => {
        console.log(err);
    });
});


module.exports = router;

