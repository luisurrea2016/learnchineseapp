import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet } from 'react-native';

export default class Lesson extends Component {
  render() {
    const { uri, name } = this.props;
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Lesson {name}!</Text>
      <Image source={{uri}} style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
});