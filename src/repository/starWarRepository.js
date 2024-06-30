const { DynamoDB } = require("aws-sdk");
const { TABLE_NAME } = require("../constants/globalConsts");
const { v4 } = require("uuid");

const dynamoDB = new DynamoDB.DocumentClient();

const insertCharacterRepository = async (starWar) => {
  const createAt = new Date().toISOString();
  const id = v4();

  const newCharacter = {
    id,
    createAt,
    ...starWar,
  };

  await dynamoDB
    .put({
      TableName: TABLE_NAME,
      Item: newCharacter,
    })
    .promise();

  return newCharacter;
};

const getCharactersRepository = async () => {
  return await dynamoDB
    .scan({
      TableName: TABLE_NAME,
    })
    .promise();
};

module.exports = { insertCharacterRepository, getCharactersRepository };
