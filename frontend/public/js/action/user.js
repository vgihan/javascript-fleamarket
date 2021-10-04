export const GET_LOGIN_PENDING = "get_login_pending";
export const GET_LOGIN_SUCCESS = "get_login_success";
export const GET_LOGIN_FAILURE = "get_login_failure";

export const checkLoginAsync = () => {
    return (dispatch) => {
        dispatch({ type: GET_LOGIN_PENDING });
        fetch("/auth/local/login", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) =>
                dispatch({
                    type: GET_LOGIN_SUCCESS,
                    payload: data,
                })
            )
            .catch((err) => {
                dispatch({
                    type: GET_LOGIN_FAILURE,
                });
            });
    };
};
