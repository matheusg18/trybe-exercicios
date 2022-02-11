const SIMPSONS_PATH = './simpsons.json';
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');
const crypto = require('crypto');

const TOKEN_LIST = [];

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

const app = express();

app.use(bodyParser.json());

const auth = (req, res, next) => {
  const { authorization = '' } = req.headers;

  if (authorization.length === 16 && TOKEN_LIST.includes(authorization)) {
    next();
    return;
  }
  res.status(401).json({ message: 'Token inválido!' });
};

app.get('/simpsons', auth, async (_req, res) => {
  try {
    const simpsonsRaw = await fs.readFile(SIMPSONS_PATH);
    const simpsons = JSON.parse(simpsonsRaw);

    res.status(200).json(simpsons);
  } catch (_err) {
    res.status(500).end();
  }
});

app.get('/simpsons/:id', auth, async (req, res) => {
  const { id } = req.params;

  try {
    const simpsonsRaw = await fs.readFile(SIMPSONS_PATH);
    const simpsons = JSON.parse(simpsonsRaw);
    const selectedSimpson = simpsons.find((simpson) => simpson.id === id);

    if (selectedSimpson) {
      res.status(200).json(selectedSimpson);
    } else {
      res.status(404).json({ message: 'simpson not found' });
    }
  } catch (_err) {
    res.status(500).end();
  }
});

app.post('/simpsons', auth, async (req, res) => {
  const { id, name } = req.body;

  try {
    const simpsonsRaw = await fs.readFile(SIMPSONS_PATH);
    const simpsons = JSON.parse(simpsonsRaw);

    if (simpsons.some((simpson) => simpson.id === id)) {
      res.status(409).json({ message: 'id already exists' });
    } else {
      const data = [...simpsons, { id, name }];
      await fs.writeFile(SIMPSONS_PATH, JSON.stringify(data));
      res.status(204).end();
    }
  } catch (_err) {
    res.status(500).end();
  }
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].some((field) => !field)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  TOKEN_LIST.push(generateToken());
  return res.status(200).json({ token: TOKEN_LIST[TOKEN_LIST.length - 1] });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
