const express = require('express');
const router = express.Router();
const MovieDb = require('moviedb-promise');
const moviedb = new MovieDb(process.env.MOVIE_DB_API);
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
    moviedb.movieInfo({ id: req.params.id })
    .then(movie => {
         moviedb.movieVideos({ id: req.params.id })
         .then(videos => { 
             movie.trailer_youtube_id = videos.results[0].key
             renderTemplate(movie);
         })
         .catch(console.error)
         function renderTemplate(movie) {
             Review.find({ movieId: req.params.id })
             .then(reviews => {
                 res.render('movies-show', { movie: movie, reviews: reviews });
                 })
            }
      })
      .catch(console.error)
})
  
module.exports = router;
