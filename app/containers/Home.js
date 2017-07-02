import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  List,
  ListItem,
  FlatList,
} from "react-native-elements";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';


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

  render() {
    return (
      <view>
        <View>
          <TouchableHighlight onPress={() => this.props.fetchLessons()}>
            <Text>Fetch Lessons</Text>
          </TouchableHighlight>
        </View>
        {
          this.props.isFetching && <Text>Loading</Text>
        }
        {
          (this.props.lesssons && this.props.lesssons.length) ?
            (<List>
              <FlatList
                data={this.props.lesssons}
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
      </view>
    );
  }
}

function mapStateToProps(state) {
  return {
    lessons: state.lesssons,
    isFetching: state.isFetching,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchLessons: () => dispatch(ActionCreators.fetchLessons())
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(ActionCreators, dispatch);
// }


// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home);

export default connect(
  mapStateToProps
)(Home);