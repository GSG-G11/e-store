it('', () => {
  expect(1).toBe(1);
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
        expect(res.body.product).toEqual([{
          category: 'laptop',
          description: 'laptop omen beautiful and nice',
          id: 1,
          img: 'https://www.thoughtco.com/thmb/NRuMaaVBhsrz3AyDBweiPAZpYfw=/1500x844/smart/filters:no_upscale()/GettyImages-909076272-5c48c8c146e0fb0001891c02.jpg',
          name: 'omen',
          price: '1200',
        }]);
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
  it('should return 200 OK and Content-Type /json/', async () => {
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
