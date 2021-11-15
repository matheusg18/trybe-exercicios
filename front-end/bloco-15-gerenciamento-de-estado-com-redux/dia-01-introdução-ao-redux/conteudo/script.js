const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';

const reducer = (state = ESTADO_INICIAL) => {
  const len = ESTADO_INICIAL.length;

  switch (state.type) {
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
