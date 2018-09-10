/*
const chai = require('chai'); // asertion library
const chaiHttp = require('chai-http'); // helper test library that gives us http methods to make test resquest
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
  Comment.deleteMany({content: 'The movie was actually pretty good'}).exec( (err, comments) => {
    comments.remove();
  })
});

// TEST ROUTE : CREATE
it('should create a new comment /comments POST', (done) => {
  chai.request(server)
    .post(`/comments`)
    .end( (err, res) => {
      res.should.have.status(200);
      res.should.be.html;
      done();
    });
});

// TEST ROUTE : DELETE
it('should destroy a comment object /comments/:id', (done) => {
  let comment = new Comment(sampleComment);
  comment.save( (err, data) => {
    chai.request(server)
      .delete(`/comments/${data._id}?_method=DELETE`)
      .end( (err, res) => {
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
    });
  });

});
*/
