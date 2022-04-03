const router = require('express').Router();
const {
  clientError,
  serverError,
  getProducts,
} = require('../controllers');

router.get('/products', getProducts);
router.use(clientError);
router.use(serverError);

module.exports = router;
