const axios = require('axios');
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

  // call twitter user endpoint and get back userid as an object
  if (usernames.length) {

    return axios
      .get(userEndpoint + usernames.join(), {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        const twitterIds = {};
        if (res.data.data) {
          res.data.data.forEach(({ username, id }) => {
            twitterIds[username.toLowerCase()] = id;
          });
        }
        return twitterIds;
      })
      .catch(err => console.log(err));
  }
  return null;
};

module.exports = getTwitterId;