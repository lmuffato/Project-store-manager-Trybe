const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

exports.product = Joi.object({
  name: Joi.string().min(5).required(),
  quantity: Joi.number().min(1).required(),
});

// exports.id = Joi.string().length(24).alphanum().required();
// semelhante ao usar o  ObjectId.isValid(algumacoisa) - Anotações para fins didáticos
exports.id = Joi.objectId();
