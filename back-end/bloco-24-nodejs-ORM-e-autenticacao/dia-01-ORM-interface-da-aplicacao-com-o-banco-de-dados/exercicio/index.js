const express = require('express');
const booksRouter = require('./routes/books.router');
const errorMiddleware = require('./middlewares/error');

const port = 3000;
const app = express();
app.use(express.json());

app.use('/books', booksRouter);
app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
