const express = require('express');
const router = express.Router();

// helper funcitons
const queryValidator = require('../helper/queryValidator');

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
  });

  return router;
};