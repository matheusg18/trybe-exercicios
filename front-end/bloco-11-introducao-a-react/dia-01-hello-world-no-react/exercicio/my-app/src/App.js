import './App.css';

const compromissos = ['Preencher o forms', 'Fazer os exercícios'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ol>
      {compromissos.map((element) => Task(element))}
    </ol>
  );
}

export default App;
