const router = require('express').Router();
const {
  clientError,
  serverError,
  addProduct,
  editProduct,
} = require('../controllers');

router.post('/product', addProduct);
router.put('/product/:id', editProduct);
router.use(clientError);
router.use(serverError);

module.exports = router;
