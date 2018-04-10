const Joi = require('joi'),
  schema = Joi
    .object()
    .keys({
      'sort_by': Joi.string()
        .optional(),

      'price': Joi.string()
        .optional(),

      'name': Joi.string()
        .optional(),

      'city': Joi.string()
        .optional(),

      'date': Joi.string()
        .optional()

    });

module.exports = schema;