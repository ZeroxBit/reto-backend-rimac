const AWS = require("aws-sdk");

const translateText = async (texto) => {
  const translate = new AWS.Translate();
  const params = {
    SourceLanguageCode: "en",
    TargetLanguageCode: "es",
    Text: texto,
  };

  try {
    const { TranslatedText } = await translate.translateText(params).promise();
    return TranslatedText;
  } catch (error) {
    return texto;
  }
};

const translateObject = async (objeto) => {
  const promiseArray = Object.entries(objeto).map(async ([key, value]) => {
    const translatedKey = await translateText(key);
    const translatedValue = typeof value === "string" ? await translateText(value) : value;
    return [translatedKey, translatedValue];
  });

  const translatedEntries = await Promise.all(promiseArray);

  const result = Object.fromEntries(translatedEntries);

  return result;
};

module.exports = { translateObject, translateText };
