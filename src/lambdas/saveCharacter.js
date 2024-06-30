const { saveCharacterController } = require("../controllers/startWarController");

const saveCharacter = async (event) => {
  const body = JSON.parse(event.body);

  return await saveCharacterController(body);
};

module.exports = { saveCharacter };
