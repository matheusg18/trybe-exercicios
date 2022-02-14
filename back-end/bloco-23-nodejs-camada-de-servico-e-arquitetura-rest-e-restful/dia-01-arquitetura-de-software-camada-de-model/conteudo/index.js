const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  return res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const books = await Book.getAll();

  if ('authorId' in req.query) {
    const { authorId } = req.query;
    const booksByAuthor = await Book.getByAuthorId(authorId);

    return res.status(200).json(booksByAuthor);
  }

  return res.status(200).json(books);
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
