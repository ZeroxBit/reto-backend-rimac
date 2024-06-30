const { insertCharacterRepository, getCharactersRepository } = require("../repository/starWarRepository");
const { getCharacterById } = require("../services/starWarsServices");
const { translateObject } = require("../utils/translate");
const { saveCaharacterValidateRequest } = require("../validations/requestValidation");

const saveCharacterController = async (body) => {
  try {
    const { error } = saveCaharacterValidateRequest(body);
    if (error) {
      return {
        status: 400,
        body: error.details[0].message,
      };
    }

    const starWarCharacter = await getCharacterById(body.idCharacter);

    const starWarCharacterTranslated = await translateObject(starWarCharacter);

    const newCharacter = await insertCharacterRepository({ ...body, ...starWarCharacterTranslated });

    return {
      status: 201,
      body: newCharacter,
    };
  } catch (error) {
    return {
      status: 500,
      body: {
        message: "Internal server error",
      },
    };
  }
};

const getCharacterController = async () => {
  const characters = await getCharactersRepository();

  return {
    status: 200,
    body: characters,
  };
};

module.exports = { saveCharacterController, getCharacterController };
