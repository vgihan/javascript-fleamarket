import { observable } from "../core/observer";

export function createStore(reducer, initialState) {
    let state = observable(initialState);
    const frozenState = {};
    Object.keys(state).forEach((key) => {
        Object.defineProperty(frozenState, key, {
            get: () => state[key],
        });
    });
    const dispatch = (action) => {
        const newState = reducer(state, action);
        Object.keys(newState).forEach((key) => {
            if (state[key] === undefined) return;
            if (state[key] === newState[key]) return;
            state[key] = newState[key];
        });
    };
    const getState = () => frozenState;
    return { getState, dispatch };
}
