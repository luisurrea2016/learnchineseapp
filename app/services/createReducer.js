export const createReducer = (initialState, handlers) => {
    const reducer = (state = initialState, action) => {
        if (handlers.hasOwnProperty(action.type)) {
            console.log('inside createreducers');
            return handlers[action.type](state, action);
        } else {
            console.log(state);
            return state;
        }
    };

    return reducer;
};