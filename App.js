import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';

//import AppContainer from './app/containers/AppContainer';
import { AppNavigator, AppContainer } from './app/containers/AppContainer';
import AppWithNavigationState from './app/containers/AppNavigator';


import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Home')
);

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const appReducer = combineReducers({
  nav: navReducer,
});

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

//const store = configureStore({});
const store = createStore(appReducer);


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