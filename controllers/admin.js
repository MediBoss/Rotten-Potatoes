
// I NEED TO FIX THIS

const express = require('express');
const router = express.Router();

// PATH TO REVIEW MODEL
const Review = require('../models/review');

// NEW COMMENT
router.get('/admin', (req, res) => {
    Review.find().then( reviews => {
        res.render('admin', { reviews: reviews });
    }).catch(err => {
        console.log(err);
    });
});

// DELETE COMMENT
router.delete('/admin/delete/:id', (req, res) => {
    Review.findByIdAndRemove(req.params.id).then(review => {
        res.status(200).send(review)
    }).catch((err) => {
        console.log(err.message);
        res.status(400).send(err)
    });
})
module.exports = router;

