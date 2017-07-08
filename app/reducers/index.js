import { combineReducers } from 'redux';
import * as lessonsReducer from './lessons';
import * as navigationREducer from './navigation';

export default combineReducers({
    ...lessonsReducer,
    navigationREducer,
});