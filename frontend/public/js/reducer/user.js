import {
    GET_LOGIN_PENDING,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_FAILURE,
    NEW_POST_CHECK_CHANGE,
} from "../action/user.js";

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_LOGIN_PENDING:
            return {
                ...state,
            };
        case GET_LOGIN_SUCCESS:
            return {
                ...state,
                isLogined: action.payload.isLogined,
                user: action.payload.user,
            };
        case GET_LOGIN_FAILURE:
            return {
                ...state,
            };
        case NEW_POST_CHECK_CHANGE:
            return {
                ...state,
                isAllCheck: action.payload.isAllCheck,
            };
        default:
            return { ...state };
    }
};
