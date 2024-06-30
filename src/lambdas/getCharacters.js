const { getCharacterController } = require("../controllers/startWarController");

const getCharacters = async () => {
  return await getCharacterController();
};

module.exports = { getCharacters };
