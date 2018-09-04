const mongoose = require('mongoose');

    // review model
module.exports = mongoose.model("Review", {
  title: String,
  description: String,
  movieTitle: String,
  rating: Number
});
