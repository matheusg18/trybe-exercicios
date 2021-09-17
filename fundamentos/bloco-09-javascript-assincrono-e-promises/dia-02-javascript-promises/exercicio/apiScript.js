// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((body) => showJoke(body.joke));
};

window.onload = () => fetchJoke();

const promise = new Promise((resolve, reject) => {
  const randomNumbers = new Array(10).fill(0).map(() => Math.ceil(Math.random() * 50) ** 2);
  const sum = randomNumbers.reduce((acc, number) => acc + number, 0);

  if (sum < 8000) {
    return resolve([sum / 2, sum / 3, sum / 5, sum / 10]);
  }

  reject('É mais de oito mil! Essa promise deve estar quebrada!');
})
  .then((arr) => arr)
  .then((arr) => arr.reduce((acc, item) => acc + item, 0))
  .then((sum) => console.log(sum))
  .catch((message) => console.warn(message));

const showJoke = (joke) => {
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerText = joke;
};
