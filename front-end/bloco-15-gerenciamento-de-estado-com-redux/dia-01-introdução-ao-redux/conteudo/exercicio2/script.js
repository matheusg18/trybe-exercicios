const combinedReducers = Redux.combineReducers({
  reducer1: meuPrimeiroReducer,
  reducer2: meuSegundoReducer,
});

const store = Redux.createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
