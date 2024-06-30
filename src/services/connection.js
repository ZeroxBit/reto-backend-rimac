const axios = require("axios");
const { BASE_URL_SWAPI } = require("../constants/globalConsts");

const instanceAxios = axios.create({
  baseURL: BASE_URL_SWAPI,
});

const API = {
  get: async (path, config) => {
    return await instanceAxios.get(path, config);
  },
  post: async (path, data, config = {}) => {
    return await instanceAxios.post(path, data, config);
  },
};

module.exports = API;
