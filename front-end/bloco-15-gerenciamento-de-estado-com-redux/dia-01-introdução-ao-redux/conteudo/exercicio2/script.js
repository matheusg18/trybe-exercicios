const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME';

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      const { newName } = action.payload;
      return {
        ...state,
        nome: newName,
      };
    case CHANGE_LAST_NAME:
      const { newLastName } = action.payload;
      return {
        ...state,
        sobrenome: newLastName,
      };
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      const { newName } = action.payload;
      return {
        ...state,
        nome: newName,
      };
    case CHANGE_LAST_NAME:
      const { newLastName } = action.payload;
      return {
        ...state,
        sobrenome: newLastName,
      };
    default:
      return state;
  }
};

const combinedReducers = Redux.combineReducers({
  reducer1: meuPrimeiroReducer,
  reducer2: meuSegundoReducer,
});

const store = Redux.createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
