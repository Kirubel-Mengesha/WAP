const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Products GET request');
});

router.post('/', (req, res) => {
  res.send('Products POST request');
});

module.exports = router;
