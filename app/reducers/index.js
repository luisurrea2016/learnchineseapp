import { combineReducers } from 'redux';
import * as lessonsReducer from './lessons';
//import * as navigationReducer from './navigation';

export default combineReducers({
    ...lessonsReducer,
    //navigationReducer,
});