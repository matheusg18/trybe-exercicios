const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');

const app = express();
app.use(bodyParser.json());

app.use('/user', userRouter);

app.listen(3001, () => {
  console.log('Rodando na porta 3001');
});
