import { connect, model, Schema } from 'mongoose';

const options = {
  autoIndex: false, // Não cria index para cada inserção de dado no banco.
  dbName: 'model_example', // Define qual banco de dados vou utilizar.
};

connect('mongodb://localhost:27017/', options);

interface Book {
  title: string;
  author: string;
}

// Aqui está o nosso schema construído logo acima:

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: String, required: true },
});

// Para acessarmos os métodos disponibilizados pelo Mongoose e
// implementarmos nossa API, criamos um Model do product:

const bookModel = model<Book>('books', bookSchema);
