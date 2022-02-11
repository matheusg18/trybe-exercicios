const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { age, name } = req.body;

  if (age > 17) {
    res.status(200).json({ message: `Hello, ${name}!` });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.put('/users/:name/:age', (req, res) => {
  const { age, name } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(3001, () => {
  console.log('Rodando na porta 3301');
});
