const express = require('express');
const bodyParser = require('body-parser');
const Cep = require('./controllers/Cep');
const validateCep = require('./middlewares/validateCep');
const validatePost = require('./middlewares/validatePost');

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.get('/cep/:cep', validateCep, Cep.getByCep);

app.post('/cep', validatePost, Cep.create);

app.listen(port, () => console.log(`Rodando na porta ${port}!`));
