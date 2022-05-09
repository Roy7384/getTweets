const axios = require("axios");
const token = process.env.BEARER_TOKEN;
const endpointURL = "https://api.twitter.com/2/users/";

const getTwitterId = require("./getTwitterId");

const getTweets = async (names, cachedResult) => {
  const twitterIds = await getTwitterId(names, cachedResult);

  // set request header and query params
  const params = new URLSearchParams([
    ["max_results", 20],
    ["tweet.fields", "public_metrics"],
    ["exclude", "retweets"]
  ]);
  const headers = { authorization: `Bearer ${token}` };

  // generate requests for different twitter names
  const requests = names.map(name => {
    if (cachedResult[name]) {
      return Promise.resolve(cachedResult[name]);
    }
    return axios.get(endpointURL + twitterIds[name] + "/tweets", {
      params,
      headers
    })
      .then(res => {
        cachedResult[name] = res.data.data;
        return res.data.data;
      })
      .catch(err => console.log("get tweets failed due to unknown twitter username"));
  });

  // concurrently call twitter api for all twitter names
  return Promise.all(requests)
    .then(res => {
      return res.flat();
    })
    .catch(err => console.log(err));

};

module.exports = getTweets;
