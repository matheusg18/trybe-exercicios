const bodyParser = require('body-parser');
const express = require('express');

const port = 3000;
const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.listen(port, () => console.log(`Rodando na porta ${port}!`));
