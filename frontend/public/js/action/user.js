export const GET_LOGIN_PENDING = "get_login_pending";
export const GET_LOGIN_SUCCESS = "get_login_success";
export const GET_LOGIN_FAILURE = "get_login_failure";

export const NEW_POST_CHECK_CHANGE = "new_post_check_change";

export const checkLoginAsync = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_LOGIN_PENDING });
            const res = await fetch("/auth/github/login", {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            dispatch({
                type: GET_LOGIN_SUCCESS,
                payload: data,
            });
        } catch (error) {
            console.error(error);
            dispatch({
                type: GET_LOGIN_FAILURE,
            });
        }
    };
};
export const newPostCheckChange = (isAllCheck) => {
    return {
        type: NEW_POST_CHECK_CHANGE,
        payload: {
            isAllCheck: isAllCheck,
        },
    };
};
