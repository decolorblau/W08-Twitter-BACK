const { Joi } = require("express-validation");

const twitterSchemaValidator = {
  body: Joi.object({
    text: Joi.string().required(),
    likes: Joi.number().optional(),
    date: Joi.date().optional(),
  }),
};

module.exports = twitterSchemaValidator;
