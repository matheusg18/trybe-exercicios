const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const reducer = (state = ESTADO_INICIAL, action) => {
  const len = state.colors.length;

  switch (action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index < len - 1 ? state.index + 1 : state.index,
      };
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index > 0 ? state.index - 1 : state.index,
      };
    case RANDOM_COLOR:
      const newColor = criarCor();
      const newIndex = len;
      return {
        ...state,
        colors: [...state.colors, newColor],
        index: newIndex,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}

window.onload = () => {
  const buttonPrev = document.getElementById('previous');
  const buttonNext = document.getElementById('next');
  const buttonRandom = document.getElementById('random');
  const colorSpan = document.getElementById('value');

  buttonPrev.addEventListener('click', () => {
    store.dispatch({ type: PREVIOUS_COLOR });
  });

  buttonNext.addEventListener('click', () => {
    store.dispatch({ type: NEXT_COLOR });
  });

  buttonRandom.addEventListener('click', () => {
    store.dispatch({ type: RANDOM_COLOR });
  });

  store.subscribe(() => {
    const state = store.getState();
    const color = state.colors[state.index];
    colorSpan.innerHTML = color;
    colorSpan.style.backgroundColor = color;
  });
};
