const express = require('express');
const router = express.Router();
const MovieDb = require('moviedb-promise');
const apiKey = '0cc67b6fe76b6e66f651671d7509fd3c'
const moviedb = new MovieDb('0cc67b6fe76b6e66f651671d7509fd3c');

// ROUTE : INDEX
router.get('/', (req, res) => {
  moviedb.miscNowPlayingMovies()
    .then(response => {
      res.render('movies-index', { movies: response.results })
    }).catch(console.error)
})

// ROUTE : SHOW
router.get('/movies/:id', (req, res) => {
  moviedb.movieInfo({
    id: req.params.id
  }).then(movie => {
    if (movie.video){
      moviedb.movieVideos({ id: req.params.id}).then(videos => {
        movie.trailer_youtube_id = videos.results[0].key
        renderTemplate(movie)
      })
    } else {
      renderTemplate(movie)
    }

    function renderTemplate(movie) {
      res.render('movies-show', { movie: movie });
    }
  }).catch(console.error)
})

module.exports = router;
