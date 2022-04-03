const request = require('supertest');
const dbConnection = require('../server/database/config/connections');
const app = require('../server/app');
const build = require('../server/database/config/build/build');

beforeAll(build);
afterEach(build);
afterAll(() => dbConnection.end());

describe('GET /', () => {
  it('should return 200 OK and Content-Type /json/', () => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body.message).toBe('Server Is Running');
      });
  });
});

describe('GET /not-found', () => {
  it('should return 404 Not Found and Content-Type /json/', () => {
    request(app)
      .get('/not-found')
      .expect(404)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body.message).toBe('Page Not Found');
      });
  });
});
