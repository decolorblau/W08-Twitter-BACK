const { Joi } = require("express-validation");

const twitterSchemaValidator = {
  body: Joi.object({
    text: Joi.string().required(),
    likes: Joi.number().required(),
    date: Joi.date().optional(),
  }),
};

module.exports = twitterSchemaValidator;
