const express = require('express');
const router = express.Router();

// helper funcitons
const queryValidator = require('../helper/queryValidator');
const getTweets = require('../helper/getTweets');
const sortTweets = require('../helper/sortTweets');

module.exports = cachedResult => {
  // Route for pinging the server
  router.get("/ping", (req, res) => {
    res.json({ success: true });
  });

  // Route for listing all tweets according to query param
  router.get("/tweets", (req, res) => {
    const { names, sortBy, direction } = req.query;
    const errMsg = queryValidator(names, sortBy, direction);

    if (errMsg) {
      res.status(400).json(errMsg);
      return;
    }

    // get all names from query and call twitter api
    const namesArr = names.split(',').map(name => name.toLowerCase());
    
    getTweets(namesArr, cachedResult).then(tweets => {

      // sort tweets according to query parameters and send back to client
      const parsedTweets = sortTweets(sortBy, direction, tweets);
      res.json({ tweets: parsedTweets });
    });
  });

  return router;
};