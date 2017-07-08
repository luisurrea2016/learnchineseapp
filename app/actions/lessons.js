import { Api } from '../services';
import {
    FETCHING_LESSONS,
    FETCHED_LESSONS_SUCCESS,
    FETCHED_LESSONS_FAILURE
} from './types';

export function fetchLessons() {
    return (dispatch, getSate) => {
        dispatch(fetchingLessons());

        return Api.getLessons()
            .then(resp => dispatch(fetchedLessonsSuccess(resp)))
            .catch(error => dispatch(fetchedLessonsFailure(error)));
    };
}

export function fetchingLessons() {
    return {
        type: FETCHING_LESSONS,
    };
}

export function fetchedLessonsSuccess(lessons) {
    return {
        type: FETCHED_LESSONS_SUCCESS,
        lessons,
    };
}

export function fetchedLessonsFailure(error) {
    return {
        type: FETCHED_LESSONS_FAILURE,
        error,
    };
}