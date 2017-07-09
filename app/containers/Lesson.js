import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Lesson extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { uri, name } = this.props.currentLesson;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lesson {name}!</Text>
        <Image source={{ uri }} style={styles.image} />
      </View>
    );
  }
}

function mapStateToProps(state) {

  const { currentLesson } = state.lessonsState;
  return {
    currentLesson,
  };
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

export default connect(
  mapStateToProps
)(Lesson);