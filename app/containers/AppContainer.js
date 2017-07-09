import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, combineReducers } from 'redux';
import { ActionCreators } from '../actions';

import Home from './Home';


import { addNavigationHelpers, StackNavigator } from 'react-navigation';

const AppNavigator = StackNavigator({
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

export default connect(mapStateToProps)(App);