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

describe('GET products', () => {
  it('should return 200 OK and Content-Type /json/', () => {
    request(app)
      .get('/api/v1/products')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body.message).toBe('Success');
      });
  });
});

describe('GET products', () => {
  it('should return 200 OK and Content-Type /json/', () => {
    request(app)
      .get('/api/v1/products')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body.message).toBe('Success');
      });
  });
});

describe('GET /products', () => {
  it('should return 200 OK and Content-Type /json/', () => {
    request(app)
      .get('/api/v1/products')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body.message).toBe('Success');
      });
  });
});

describe('GET /product/:id', () => {
  it('should return 200 OK and Content-Type /json/', () => {
    request(app)
      .get('/api/v1/product/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body.message).toBe('Success');
      });
  });
});

describe('POST /product/', () => {
  it('should return 201 Created and Content-Type /json/', async () => {
    request(app)
      .post('/api/v1/product')
      .send({
        category: 'laptop',
        description: 'laptop omen beautiful and nice',
        name: 'omen',
        price: '1200',
        img: 'https://fake.img',
      })
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body.message).toBe('Success');
      });
  });
});

describe('PUT /product/:id', () => {
  it('should return 200 OK and Content-Type /json/', () => {
    request(app)
      .put('/api/v1/product/1')
      .send({
        category: 'laptop',
        description: 'laptop omen beautiful and nice',
        name: 'omen',
        price: '1200',
        img: 'https://fake.img',
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body.message).toBe('Success');
      });
  });
});

describe('DELETE /product/:id', () => {
  it('should return 200 OK and Content-Type /json/', () => {
    request(app)
      .delete('/api/v1/product/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body.message).toBe('Success delete product');
      });
  });
});
