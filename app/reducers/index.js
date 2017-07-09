import { combineReducers } from 'redux';
import { lessonsState } from './lessons';
import { navigationState } from './navigation';

const reducers = combineReducers({
    lessonsState,
    nav: navigationState,
});

export default reducers;