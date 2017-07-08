import {
    GO_HOME,
    GO_TO_LESSON,
} from './types';


export function goToLesson(lesson) {
    return {
        type: GO_TO_LESSON,
        lesson
    };
}

export function goHome() {
    return {
        type: GO_HOME,
    };
}