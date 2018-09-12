// The Review Model
const mongoose = require('mongoose');

module.exports = mongoose.model("Review", {
  title: String,
  description: String,
  movieTitle: String,
  movieId: { type: String, required: true},
  rating: Number
});
