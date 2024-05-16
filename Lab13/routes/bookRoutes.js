const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

console.log(bookController);

router.post('/', bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
