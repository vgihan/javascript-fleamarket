export function createStore(reducer, initialState) {
    let state = initialState;
    const dispatch = (action) => {
        state = reducer(state, action);
    };
    const getState = () => ({ ...state });
    return { getState, dispatch };
}

export const store = createStore();
