import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Home from './Home';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // return <Home {...this.props} />
        return (<View style={styles.container}>
            <Text>Let's learn some chinese 555 boom !!!</Text>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


//centrally dispatching action across entire application...
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(state => ({}), mapDispatchToProps)(AppContainer);