const express = require('express');
const router = express.Router();
const http = require('http');
const MovieDb = require('moviedb-promise');
const moviedb = new MovieDb('0cc67b6fe76b6e66f651671d7509fd3c');

//ROUTE : INDEX
router.get('/', (req, res) => {
  moviedb.miscNowPlayingMovies()
    .then(response => {
      res.render('movies-index', { movies: response.results });
    }).catch(console.error)
});

// ROUTE : SHOW

module.exports = router;
