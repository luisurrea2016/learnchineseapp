import { combineReducers } from 'redux';
import * as LessonsReducer from './lessons';

export default combineReducers({
    ...LessonsReducer,
});