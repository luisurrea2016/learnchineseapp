import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

import {
  List,
  ListItem,
} from "react-native-elements";

import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';


class Home extends Component {

  constructor(props) {
    super(props);
  }

  renderSeparator = () =>
    <View
      style={{
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginLeft: "14%"
      }}
    />;


/**https://github.com/react-community/react-navigation/tree/master/examples
 * https://github.com/leecade/react-native-swiper/blob/master/examples/components/Dynamic/index.js
 */

  render() {
    return (
      <View style={styles.container}>
        <Text>Let's learn some chinese 123!!!</Text>
        <View>
          <TouchableHighlight onPress={() => this.props.fetchLessons()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Fetch Lessons</Text>
            </View>
          </TouchableHighlight>
        </View>
        {
          this.props.isFetching && <Text>Loading</Text>
        }
        {
          this.props.lessons.length ?
            (<List>
              <FlatList
                keyExtractor={item => item.name}
                data={this.props.lessons}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={() => <Text>Select Lesson</Text>}
                renderItem={({ item }) => (
                  <ListItem
                    roundAvatar
                    title={item.name}
                    subtitle={item.label}
                    avatar={{ uri: item.uri }}
                  />
                )}
              />
            </List>) : null
        }
      </View>
    );
  }
}

function mapStateToProps(state) {

  const { lessons, isFetching, error } = state.lessonsState;
  return {
    lessons,
    isFetching,
    error,
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);