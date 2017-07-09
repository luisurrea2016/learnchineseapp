import {
    GO_HOME,
    GO_TO_LESSON,
} from './types';


export function goToLesson() {
    return {
        type: GO_TO_LESSON,
    };
}

export function goHome() {
    return {
        type: GO_HOME,
    };
}