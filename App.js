import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';

import AppContainer from './app/containers/AppContainer';
import AppWithNavigationState from './app/containers/AppNavigator';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

export default App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

// export default App = () => (
//   <Provider store={store}>
//     <AppWithNavigationState />
//   </Provider>
// );