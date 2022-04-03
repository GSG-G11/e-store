const joi = require('joi');

const productsSchema = joi.object({
  name: joi.string().min(2).required(),
  img: joi.string().required(),
  description: joi.string().required(),
  category: joi.string(),
  price: joi.decimal(),
});

module.exports = productsSchema;
