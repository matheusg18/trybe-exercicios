const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3),
};

const addEntry = (object, key, value) => {
  object[key] = value;
};

const listKeys = (object) => {
  console.log(Object.keys(object));
};

const listValues = (object) => {
  console.log(Object.values(object));
};

const objectSize = (object) => Object.entries(object).length;

const getTotalStudents = () => {
  let total = 0;
  for (const lesson in allLessons) {
    total += allLessons[lesson].numeroEstudantes;
  }
  return total;
};

const getValueByNumber = (object, position) => Object.values(object)[position];

addEntry(lesson2, 'turno', 'noite');
console.table(lesson2);

listKeys(lesson1);
listValues(lesson1);

console.log(objectSize(lesson3));

console.table(allLessons);

console.log(`${getTotalStudents()} estudantes no total`);

console.log(getValueByNumber(lesson1, 0));
