const request = require('supertest');
const app = require('../server/app')
const dbConnection = require('../server/database/config/connections');
const controllers = require('../server/controllers');
const build = require('../server/database/config/build/build');
const { getProductQuery, getProductsQuery, deleteProductQuery, editProductQuery, addProductQuery } = require('../server/database/queries');

beforeAll(build);
afterEach(build);
afterAll(() => dbConnection.end());

test('get product', () => {
  return getProductQuery(1)
    .then((data) => {
      expect(data.rows.length).toBe(1);
      expect(data.rows[0].id).toBe(1);
      expect(data.rows[0].price).toBe('1200');
      expect(data.rows[0].category).toBe('laptop');
    });
});

test('get products', () => {
  return getProductsQuery()
    .then((data) => {
      expect(data.rows.length).toBe(4);
    });
});

test('delete product', () => {
  const id = 1;
  deleteProductQuery(id)
    .then((data) => {
      expect(data.rows[0]).toEqual(undefined);
    });
});

test('add product', () => {
  const name = 'testProduct';
  const img = 'https://www.thoughtco.com/thmb/NRuMaaVBhsrz3AyDBweiPAZpYfw=/1500x844/smart/filters:no_upscale()/GettyImages-909076272-5c48c8c146e0fb0001891c02.jpg';
  const category = 'laptop';
  const price = 2000;
  const description = 'test add laptop';
  return addProductQuery({name, price ,category ,img,description})
    .then((data) => {
      expect(data.rows[0]).toEqual({
        id: 5, name: 'testProduct', price: '2000',category: 'laptop', img: 'https://www.thoughtco.com/thmb/NRuMaaVBhsrz3AyDBweiPAZpYfw=/1500x844/smart/filters:no_upscale()/GettyImages-909076272-5c48c8c146e0fb0001891c02.jpg',
          description:'test add laptop',
      });
    });
});

test('edit product', () => {
  const id = 2;
  const name = 'hp';
  const img = 'https://in-media.apjonlinecdn.com/catalog/product/c/0/c07145111.png';
  const category = 'laptop';
  const price = 2000;
  const description = 'laptop hp beautiful and nice';
  return editProductQuery({name, price, category, img, description,}, id)
  .then((data) => {
    expect(data.rows[0].price).toBe('2000');
    expect(data.rows[0]).toEqual({
      id: 2, name: 'hp', price: '2000',category: 'laptop', img: 'https://in-media.apjonlinecdn.com/catalog/product/c/0/c07145111.png',
          description:'laptop hp beautiful and nice',
    })
  })
})