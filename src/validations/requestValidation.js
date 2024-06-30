const Joi = require("joi");

const saveCaharacterValidateRequest = (request) => {
  const schema = Joi.object().keys({
    idCharacter: Joi.number().required().messages({
      "number.base": "El campo idCharacter tiene que ser numérico",
      "any.required": "El campo idCharacter es requerido",
    }),

    description: Joi.string()
      .pattern(/^[a-zA-Z0-9 ]*$/)
      .messages({
        "string.pattern.base": "El campo description solo puede contener letras, números y espacios.",
      }),
  });

  return schema.validate(request);
};

module.exports = { saveCaharacterValidateRequest };
