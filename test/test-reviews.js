const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const Review = require('..models/review');

chai.use(chaiHttp);

describe('Reviews', () => {

  // TEST INDEX
  chai.request(server)
    .get('/')

})
