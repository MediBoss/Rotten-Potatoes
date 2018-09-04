
const mongoose = require('mongoose');
const schema = mongoose.Schema();

module.exports = mongoose.model('Comment', {
  content: String,
  reviewId: { type: Schema.Types.ObjectId, ref: 'Review'}
});
