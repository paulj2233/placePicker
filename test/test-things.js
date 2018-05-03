
const chai = require('chai');
// const chaiHttp = require('chai-http');

// Import server.js and use destructuring assignment to create variables for
// server.app, server.runServer, and server.closeServer
const {app, runServer, closeServer} = require('../server');
const expect = require('chai').expect;

// chai.use(chaiHttp);



// function isEqual (a, b) {
// 	return a === b
// }

// // "describe" is used to declare the entity to be tested, and a callback function that sets up the tests
// describe('isEqual', function() {
//     // indicate the behavior to be tested
//     // typically the "it" statement will also include a callback that provides the test
//     it('should give right answers for equal and unequal inputs',  function(){
//       expect(isEqual(1, 1)).to.be.true;
//     });
//   }
// );



describe('Connecting to root', function() {

  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('should connect to root and get a 200 status code and html', function() {
	return chai.request(app)
      .get('/public')
	  .then(function(res) {
	  		res.should.have.status(200);
	        // expect(res).to.have.status(200);
	        // expect(res.body).to.be.a('array');
	        // expect(res.body.length).to.be.above(0);
	       
      });
  });
});