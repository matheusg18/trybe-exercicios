const express = require('express');
const rescue = require('express-rescue');
const { validate } = require('email-validator');
const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

// base path = /user
const userRouter = express.Router();
const INVALID_DATA_RESPONSE = { message: 'invalid data' };
const USERS_FILE_PATH = path.resolve(__dirname, '../data/users.json');
const tokens = [];

const verifyUsername = (req, res, next) => {
  const { username } = req.body;

  if (typeof username !== 'string' || username.length <= 3) {
    return res.status(400).json(INVALID_DATA_RESPONSE);
  }

  next();
};

const verifyEmail = (req, res, next) => {
  const { email } = req.body;

  if (!validate(email)) {
    return res.status(400).json(INVALID_DATA_RESPONSE);
  }

  next();
};

const verifyPassword = (req, res, next) => {
  const { password } = req.body;
  // testa se são todos digitos e tem de 4 a 8 caracteres
  const passwordRegex = /^\d{4,8}$/;

  if (typeof password !== 'string' || !passwordRegex.test(password)) {
    return res.status(400).json(INVALID_DATA_RESPONSE);
  }

  next();
};

const verifyIfAlreadyExists = async (req, res, next) => {
  const { email, username } = req.body;
  const users = JSON.parse(await fs.readFile(USERS_FILE_PATH));

  if (users.some((user) => user.email === email || user.username === username)) {
    return res.status(400).json({ message: 'user already exists' });
  }

  req.users = users;
  next();
};

const generateToken = () => crypto.randomBytes(6).toString('hex');

userRouter.post(
  '/register',
  [verifyUsername, verifyEmail, verifyPassword],
  rescue(verifyIfAlreadyExists),
  async (req, res) => {
    const { username, email, password } = req.body;
    const { users } = req;
    const newUser = { username, email, password };

    await fs.writeFile(USERS_FILE_PATH, JSON.stringify([...users, newUser]));
    res.status(201).json({ message: 'user created' });
  },
);

userRouter.post(
  '/login',
  [verifyEmail, verifyPassword],
  rescue(async (req, res) => {
    const { email, password } = req.body;
    const users = JSON.parse(await fs.readFile(USERS_FILE_PATH));

    if (users.find((user) => user.email === email && user.password === password)) {
      const newToken = generateToken();
      tokens.push(newToken);
      return res.status(200).json({ token: newToken });
    }

    return res.status(400).json({ message: 'email or password is incorrect' });
  }),
);

userRouter.use((error, _req, res, _next) => {
  console.log(error);
  res.status(500).send(error.message);
});

module.exports = userRouter;
