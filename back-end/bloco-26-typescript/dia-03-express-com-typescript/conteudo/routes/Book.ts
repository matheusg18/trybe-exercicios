import { Router, Request, Response } from 'express';
import Book from '../interfaces/Book';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

const router = Router();

const getBooks = async (): Promise<Book[]> =>
  JSON.parse(await readFile(resolve(__dirname, '..', 'data', 'books.json'), 'utf8'));

router.get('/books', async (req: Request, res: Response) => {
  const books = await getBooks();

  return res.status(200).json(books);
});

router.get('/books/:isbn', async (req: Request, res: Response) => {
  const { isbn } = req.params;
  const books = await getBooks();
  const selectedBook = books.find((book) => book.isbn === isbn);

  if (!selectedBook) return res.status(404).json({ message: 'Livro não encontrado.' });

  return res.status(200).json(selectedBook);
});

router.post('/books', (req: Request, res: Response) => {});

router.put('/books/:isbn', (req: Request, res: Response) => {});

router.delete('/books/:isbn', (req: Request, res: Response) => {});

export default router;
