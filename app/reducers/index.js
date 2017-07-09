import { combineReducers } from 'redux';
import * as lessonsReducer from './lessons';
import * as navigationReducer from './navigation';

const reducers = combineReducers({
    ...lessonsReducer,
    //navigationReducer,
});

export default reducers;