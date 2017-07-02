import { createReducer } from '../services';
import {
    FETCHING_LESSONS,
    FETCHED_LESSONS_SUCCESS,
    FETCHED_LESSONS_FAILURE
} from '../actions'

const initialState = {
    lessons: [],
    isFetching: false,
    error: '',
}

export const lessonsState = createReducer(initialState, {
    [FETCHING_LESSONS](state, action) {
        return {
            ...state,
            lessons: [],
            isFetching: true,
        };
    },

    [FETCHED_LESSONS_SUCCESS](state, action) {
        return {
            ...state,
            isFetching: false,
            error: '',
            lessons: action.lessons,
        };
    },

    [FETCHED_LESSONS_FAILURE](state, action) {
        return {
            ...state,
            isFetching: false,
            error: action.error,
        };
    },

});