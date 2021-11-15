const reducer = (state = ESTADO_INICIAL) => {
  switch (state.type) {
    default:
      return state;
  }
};

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
