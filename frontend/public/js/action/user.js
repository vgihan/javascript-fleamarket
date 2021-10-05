export const GET_LOGIN_PENDING = "get_login_pending";
export const GET_LOGIN_SUCCESS = "get_login_success";
export const GET_LOGIN_FAILURE = "get_login_failure";

export const POST_LOGIN_PENDING = "post_login_pending";
export const POST_LOGIN_SUCCESS = "post_login_success";
export const POST_LOGIN_FAILURE = "post_login_failure";

export const checkLoginAsync = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_LOGIN_PENDING });
            const res = await fetch("/auth/local/login", {
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
            console.log(error);
            dispatch({
                type: GET_LOGIN_FAILURE,
            });
        }
    };
};
