import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

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

export const AppNavigator = StackNavigator({
    Home: { screen: Home },
    Lesson: { screen: Banner },
});

class AppWithNavigationState extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props,
                state: this.props.nav,
            })} />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(
    mapStateToProps
)(AppWithNavigationState);

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