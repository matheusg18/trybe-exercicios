import express, { Request, Response } from 'express';

const PORT = 3000;
const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Tudo certo!' });
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
