const express = require('express');
const router = express.Router();

module.exports = cachedResult => {
  
  // Route for pinging the server
  router.get('/ping', (req, res) => {
    res.json({ success: true });
  });
  
  return router;
};