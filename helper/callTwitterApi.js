const axios = require("axios");
const token = process.env.BEARER_TOKEN;
const userEndpoint = "https://api.twitter.com/2/users/by?usernames=";

// get twitter id from usernames
const getTwitterId = (names, cachedResult) => {
  const usernames = [];
  names.forEach(name => {
    // check if this twitter username is in cachedResult
    if (!cachedResult[name]) {
      usernames.push(name);
    }
  });

  return axios.get(userEndpoint + usernames.join(), {
    headers: {
      'authorization': `Bearer ${token}`
    }
  })
    .then(res => res.data.map(userObj => userObj.id))
    .catch(err => console.log(err));

};

const callTwitterApi = (names, cachedResult) => {
  const requests = names.map(name => {
    if (Object.keys(cachedResult).includes(name)) {
      return Promise.resolve({ data: { tweets: cachedResult[name] } });
    }
  });
};

module.exports = callTwitterApi;
