const API = require("./connection");

const getCharacterById = async (id) => {
  const response = await API.get(`/people/${id}/`);

  return response.data;
};

module.exports = { getCharacterById };
