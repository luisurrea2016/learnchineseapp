import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, combineReducers } from 'redux';
import { ActionCreators } from '../actions';

import Home from './Home';

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

import { addNavigationHelpers, StackNavigator } from 'react-navigation';

export const AppNavigator = StackNavigator({
    Home: { screen: Banner },
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


class AppContainer2 extends Component {
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

//export default connect(mapStateToProps)(App);

export const AppContainer = connect(mapStateToProps)(App);


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