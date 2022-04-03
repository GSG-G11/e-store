const {deleteProductQuery} = require('../../database/queries');

const deleteProduct = (req, res, next) => {
     deleteProductQuery(req.params.id).then(() =>{
        res.json({ message: 'Success delete product', status: 200 })
     })
     .catch((err) => next(err));
}

module.exports = deleteProduct;