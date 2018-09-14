const express = require('express');
const router = express.Router();
const MovieDb = require('moviedb-promise');
const apiKey = '0cc67b6fe76b6e66f651671d7509fd3c'
const moviedb = new MovieDb(apiKey);
const Review = require('../models/review');

// ROUTE : INDEX
router.get('/', (req, res) => {
  moviedb.miscNowPlayingMovies()
    .then(response => {
      res.render('movies-index', { movies: response.results });
    }).catch(console.error)
});

// ROUTE : SHOW
router.get('/movies/:id', (req, res) => {
  moviedb.movieInfo({id: req.params.id}).then(movie => {
    Review.find({
      movieId: req.params.id
    }).then(reviews => {
      res.render('movies-show', { movie: movie, reviews: reviews});
    }).catch(console.error)
  }).catch(console.error)
});


module.exports = router;
