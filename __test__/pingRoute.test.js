const request = require('supertest');
const app = require('../app');

describe('Test pinging server', () => {
  test('It should response the GET method and return correct response', done => {
    request(app)
      .get('/api/ping')
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res._body.success).toBe(true);
        done();
      });
  });
});