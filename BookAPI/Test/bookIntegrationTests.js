/**
 * Created by z013n8g on 5/31/16.
 */
var should = require('should'),
    request = require('supertest'),
    app = require('../app.js'),
    mongoose = require('mongoose'),
    Book = mongoose.model('Book'),
    agent = request.agent(app);


describe('Book Crud Test ', function(){
    it('Should allow a book to be posted and return a read and_id',function(done) {
        var bookPost = {title: "new Book", author: "gdjh", genre: "Fiction"};

        agent.post('/api/books/books')
            .send(bookPost)
            .expect(200)
            .end(function (err, results) {
                results.body.read.should.equal(false);
                results.body.should.have.property("_id");
                done();
            })
    })
    afterEach(function(done){
       Book.remove().exec();
        done();
    })
})