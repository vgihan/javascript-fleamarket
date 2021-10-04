import {
    LOGIN,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from "../action/user.js";

const defaultState = {
    isLoggedIn: false,
    fetchingUpdate: false,
    user: {},
};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                fetchingUpdate: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                isLoggedIn: true,
                user: action.result,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                fetchingUpdate: false,
            };
    }
};
