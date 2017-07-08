import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Home from './Home';

export const AppNavigator = StackNavigator({
    Home: { screen: Home },
});

class AppWithNavigationState extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (<AppNavigator navigation={addNavigationHelpers({ dispatch: this.props.dispatch, 
        state: this.props.nav,
         })} />
         );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);