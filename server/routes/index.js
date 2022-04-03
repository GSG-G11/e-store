const router = require('express').Router();

const {
  clientError,
  serverError,
  addProduct,
  getProducts,
} = require('../controllers');

router.get('/products', getProducts);
router.post('/product', addProduct);
router.use(clientError);
router.use(serverError);

module.exports = router;
