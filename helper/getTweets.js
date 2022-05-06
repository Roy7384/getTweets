const axios = require("axios");
const token = process.env.BEARER_TOKEN;

const getTweets = (names, cachedResult) => {
  const requests = names.map(name => {
    if (Object.keys(cachedResult).includes(name)) {
      return Promise.resolve({ data: { tweets: cachedResult[name] } });
    }
  });
};

module.exports = getTweets;
