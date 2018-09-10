const chai = require('chai'); // asertion library
const chaiHttp = require('chaiHttp'); // helper test library that gives us http methods to make test resquest
const should = chai.should(); // using the should test style
const Comment = require('../models/comment');
const server = require('../app');

chai.use(chaiHttp);

let sampleComment = {
  "content": "The movie was actually pretty good"
};

describe('Comments', () => {

  // MAKING SURE THE SAMPLE COMMENT OBJECT CREATED IS DELETED FROM THE DATABASE
after(() => {
  Review.deleteMany({title: 'The most amazing Marvel movie'}).exec( (err, reviews) => {
    reviews.remove();
  })
});

// TEST ROUTE : CREATE

// TEST ROUTE : DELETE

})
