const bodyParser = require('body-parser');
const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  return res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if (!Author.isValid(firstName, middleName, lastName)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(firstName, middleName, lastName);

  res.status(201).json({ message: 'Autor criado com sucesso!' });
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

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const bookById = await Book.getById(id);

  if (!bookById) return res.status(404).json({ message: 'Not Found' });

  return res.status(200).json(bookById);
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
