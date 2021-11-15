const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';

const reducer = (state = ESTADO_INICIAL, action) => {
  const len = ESTADO_INICIAL.colors.length;

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
    default:
      return state;
  }
};

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.onload = () => {
  const buttonPrev = document.getElementById('previous');
  const buttonNext = document.getElementById('next');
  const colorSpan = document.getElementById('value');

  buttonPrev.addEventListener('click', () => {
    store.dispatch({ type: PREVIOUS_COLOR });
  });

  buttonNext.addEventListener('click', () => {
    store.dispatch({ type: NEXT_COLOR });
  });

  store.subscribe(() => {
    const state = store.getState();
    const color = state.colors[state.index];
    colorSpan.innerHTML = color;
    colorSpan.style.backgroundColor = color;
  });
};
