export function createStore(reducer, initialState) {
    let state = initialState;
    const listeners = [];
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    };
    const getState = () => ({ ...state });
    const subscribe = (listener) => {
        listeners.push(listener);
    };
    return { getState, dispatch, subscribe };
}
