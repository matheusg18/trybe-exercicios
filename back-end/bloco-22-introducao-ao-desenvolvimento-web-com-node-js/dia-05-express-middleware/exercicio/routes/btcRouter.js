const express = require('express');
const fetch = require('node-fetch');

const btcRouter = express.Router();
const API_ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

btcRouter.get('/price', async (req, res) => {
  const { authorization } = req.headers;

  if (!global.tokens.includes(authorization)) {
    return res.status(401).send({ message: 'invalid token' });
  }

  const btcValue = await fetch(API_ENDPOINT).then((response) => response.json());
  return res.status(200).json(btcValue);
});

module.exports = btcRouter;
