export const GET_LOGIN_PENDING = "get_login_pending";
export const GET_LOGIN_SUCCESS = "get_login_success";
export const GET_LOGIN_FAILURE = "get_login_failure";

export const NEW_POST_CHECK_CHANGE = "new_post_check_change";

export const SET_CATEGORY = "set_category";

export const checkLoginAsync = async (dispatch) => {
    try {
        dispatch(getLoginPending());
        const res = await fetch("/auth/github/login", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        dispatch(getLoginSuccess(data));
    } catch (error) {
        console.error(error);
        dispatch(getLoginFailure());
    }
};
export const getLoginPending = () => {
    return { type: GET_LOGIN_PENDING };
};
export const getLoginSuccess = (data) => {
    return {
        type: GET_LOGIN_SUCCESS,
        payload: data,
    };
};
export const getLoginFailure = () => {
    return { type: GET_LOGIN_FAILURE };
};
export const newPostCheckChange = (isAllCheck) => {
    return {
        type: NEW_POST_CHECK_CHANGE,
        payload: {
            isAllCheck: isAllCheck,
        },
    };
};
export const setCategory = (category) => {
    return {
        type: SET_CATEGORY,
        payload: {
            category: category,
        },
    };
};
