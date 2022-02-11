const SIMPSONS_PATH = './simpsons.json';
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();

app.use(bodyParser.json());

app.get('/simpsons', async (_req, res) => {
  try {
    const simpsonsRaw = await fs.readFile(SIMPSONS_PATH);
    const simpsons = JSON.parse(simpsonsRaw);

    res.status(200).json(simpsons);
  } catch (_err) {
    res.status(500).end();
  }
});

app.get('/simpsons/:id', async (req, res) => {
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

app.post('/simpsons', async (req, res) => {
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

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
