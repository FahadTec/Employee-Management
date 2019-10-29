const request = require('request');
const frisby = require('frisby');

const endpoint = 'http://localhost:5000/api/user';

describe("Users List API Exists", function() {
    describe("GET /users", function() {
        it("returns status code 200", function(done) {
            request.get(endpoint, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
   });
});;
describe("GET /api/user/:_id", function() {

    it("should return user from given Id", function(done) {
        return  frisby
        .get(endpoint + "/5dad9cbfe8f6172760533106")
        .then(function(response) {
          expect(response.status).toBe(200);
          
        })
        .done(done);
    })

  });

   
});