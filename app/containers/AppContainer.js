import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, combineReducers } from 'redux';
import { ActionCreators } from '../actions';

import Home from './Home';
/**
 * some reduxy stuff
 */

import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

const Banner = () => (
  <View style={styles.banner}>    
    <Text style={styles.title}>React Navigation Examples</Text>
  </View>
);

import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';

const AppNavigator = StackNavigator({
    Home: { screen: Banner },
});


const initialState = AppNavigator.router.getStateForAction(
    //AppNavigator.router.getActionForPathAndParams('Home')
    NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({
                routeName: 'Home',
            }),
        ],
    })
);

const navReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

const appReducer = combineReducers({
    nav: navReducer,
});

const mapStateToProps = (state) => ({
    nav: state.nav
});

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
            })} />
        );
    }
}


class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Home {...this.props} />;
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

//export default connect(state =>({}), mapDispatchToProps)(AppContainer);

// export default connect(mapStateToProps)(App);

export default Banner;


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