const connection = require('./connection');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books');

  return books.map(serialize);
};

const getByAuthorId = async (authorId) => {
  const [booksByAuthor] = await connection.execute('SELECT id, title, author_id FROM books WHERE author_id = ?', [authorId]);

  return booksByAuthor.map(serialize);
};

const getById = async (id) => {
  const [bookById] = await connection.execute('SELECT id, title, author_id FROM books WHERE id = ?', [id]);

  if (bookById.length === 0) return null;

  return bookById.map(serialize)[0];
};

module.exports = { getAll, getByAuthorId, getById };
