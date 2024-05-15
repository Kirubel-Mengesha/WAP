const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Users GET request');
});

router.post('/', (req, res) => {
  res.send('Users POST request');
});

module.exports = router;
