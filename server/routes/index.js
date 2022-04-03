const router = require('express').Router();

const {
  clientError,
  serverError,
  addProduct,
  editProduct,
  getProducts,
} = require('../controllers');

router.get('/products', getProducts);
router.post('/product', addProduct);
router.put('/product/:id', editProduct);
router.use(clientError);
router.use(serverError);

module.exports = router;
