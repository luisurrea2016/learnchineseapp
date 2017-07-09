import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../containers/AppNavigator';

import { createReducer } from '../services';
import {
    GO_TO_LESSON,
    GO_HOME,
} from '../actions';

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Home'));

// export const navigationState = createReducer(initialState, {
//     [GO_TO_LESSON](state, action) {
//         return AppNavigator.router.getStateForAction(
//             NavigationActions.navigate({ routeName: 'Lesson' }),
//             state
//         );
//     },

//     [GO_HOME](state, action) {
//         return AppNavigator.router.getStateForAction(
//             NavigationActions.navigate({ routeName: 'Home' }),
//             state
//         );
//     },
// });

export const navigationState = (state = initialState, action) => {

    const nextSate = AppNavigator.router.getStateForAction(action, state);

    return nextSate || state;
};