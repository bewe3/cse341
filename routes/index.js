const express = require('express');
const router = express.Router();

router.get('/contacts', (req, res) => {
  // Code to retrieve contact info from JSON file
  const contacts = require('./contacts.json');

  // Return contact info to the client
  res.json(contacts);
});

module.exports = router;
