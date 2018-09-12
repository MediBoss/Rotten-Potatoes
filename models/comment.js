
// The Comment Model
const mongoose = require('mongoose');
const schema = mongoose.Schema;

module.exports = mongoose.model('Comment', {
  content: String,
  reviewId: { type: schema.Types.ObjectId, ref: 'Review'}
});
