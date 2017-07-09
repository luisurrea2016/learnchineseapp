import * as LessonsActions from './lessons';
import * as NavigationActions from './navigation';

export * from './types';

export const ActionCreators = { ...LessonsActions, ...NavigationActions };