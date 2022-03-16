import express, { Request, Response } from 'express';
import BookRoutes from './routes/Book';

const app = express();
const PORT = 3000;

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Tudo certo!' });
});

app.use(BookRoutes);

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
