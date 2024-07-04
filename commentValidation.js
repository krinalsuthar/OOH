const joi = require("joi");

let commentSchema = joi.object({
  comment: joi
    .object({
      rating: joi.string().required().max(5).min(1),
      comments: joi.string().required(),
    })
    .required(),
});
module.exports = commentSchema;
