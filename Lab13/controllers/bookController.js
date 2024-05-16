const Book = require('../models/book');

let books = [];
let nextId = 1;

exports.createBook = (req, res) => {
    const { title, ISBN, publishedDate, author } = req.body;
    const newBook = new Book(nextId++, title, ISBN, publishedDate, author);
    books.push(newBook);
    res.status(201).json(newBook);
};

exports.getAllBooks = (req, res) => {
    res.json(books);
};

exports.getBookById = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
};

exports.updateBook = (req, res) => {
    const { title, ISBN, publishedDate, author } = req.body;
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');

    book.title = title;
    book.ISBN = ISBN;
    book.publishedDate = publishedDate;
    book.author = author;

    res.json(book);
};

exports.deleteBook = (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).send('Book not found');

    const deletedBook = books.splice(bookIndex, 1);
    res.json(deletedBook[0]);
};
