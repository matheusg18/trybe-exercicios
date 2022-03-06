const { Book } = require('../models');

const getAll = async (req, res) => {
  const { author } = req.query;
  const books = await Book.findAll({
    order: [
      ['title', 'ASC'],
      ['createdAt', 'ASC'],
    ],
  });

  if (author) {
    return res.status(200).json(books.filter(({ author: bookAuthor }) => bookAuthor === author));
  }

  return res.status(200).json(books);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  const result = await Book.create({ title, author, pageQuantity });
  console.log('create', result);

  return res.status(201).json(result);
};

const getById = async (req, res) => {
  const id = +req.params.id;

  const book = await Book.findByPk(id);

  if (!book) return res.status(404).json({ message: 'id not found' });

  return res.status(200).json(book);
};

const update = async (req, res) => {
  const id = +req.params.id;

  const result = await Book.update({ ...req.body }, { where: { id } });
  console.log('update', result);

  return res.status(200).json(result);
};

const exclude = async (req, res) => {
  const id = +req.params.id;

  const result = await Book.destroy({ where: { id } });
  console.log('exclude', result);

  return res.status(200).json(result);
};

module.exports = { create, exclude, getAll, getById, update };
