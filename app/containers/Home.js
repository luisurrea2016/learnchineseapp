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

  // render() {
  //   return (
  //     <view>
  //       <View>
  //         <TouchableHighlight onPress={() => this.props.fetchLessons()}>
  //           <Text>Fetch Lessons</Text>
  //         </TouchableHighlight>
  //       </View>
  //       {
  //         this.props.isFetching && <Text>Loading</Text>
  //       }
  //       {
  //         (this.props.lesssons && this.props.lesssons.length) ?
  //           (<List>
  //             <FlatList
  //               data={this.props.lesssons}
  //               ItemSeparatorComponent={this.renderSeparator}
  //               ListHeaderComponent={() => <Text>Select Lesson</Text>}
  //               renderItem={({ item }) => (
  //                 <ListItem
  //                   roundAvatar
  //                   title={item.name}
  //                   subtitle={item.label}
  //                   avatar={{ uri: item.uri }}
  //                 />
  //               )}
  //             />
  //           </List>) : null
  //       }
  //     </view>
  //   );
  // }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableHighlight onPress={() => this.props.fetchLessons()}>
            <Text>Fetch Lessons 45</Text>
          </TouchableHighlight>
        </View>
        {
          <Text>{this.props.isFetching}!!!</Text>
        }
        {
          (this.props.lesssons && this.props.lesssons.length) ?
            (<Text>Lessons are here!!!</Text>) : null
        }
        <Text>Let's learn some chinese 555 boom!!!</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { lessons, isFetchig, error } = state.lessonsState;
  return {
    lessons,
    isFetchig,
    error,
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default connect(
  mapStateToProps
)(Home);