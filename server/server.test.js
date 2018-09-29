const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return Hello World response', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found'
          });
        })
        .end(done);
    });
  });
  describe('GET /users', () => {
    it('should check if user Robert exists', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Robert',
            age: 25
          });
        })
        .end(done);
    });
  });
  })
