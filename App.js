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

import AppContainer from './app/containers/AppContainer';
import AppWithNavigationState from './app/containers/AppNavigator';


import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

const Banner = () => (
  <View style={styles.banner}>    
    <Text style={styles.title}>React Navigation</Text>
  </View>
);




import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';

const AppNavigator = StackNavigator({
    Home: { screen: Banner },
});


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


const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#673ab7',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    margin: 8,
  },
});