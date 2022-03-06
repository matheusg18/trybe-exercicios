const express = require('express');
const rescue = require('express-rescue');
const booksController = require('../controllers/books');

const router = express.Router();

router.get('/', rescue(booksController.getAll));

router.get('/:id', rescue(booksController.getById));

router.post('/', rescue(booksController.create));

router.put('/:id', rescue(booksController.update));

router.delete('/:id', rescue(booksController.exclude));

module.exports = router;
