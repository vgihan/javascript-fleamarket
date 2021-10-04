import { userReducer } from "../reducer/user";
import { createStore } from "./createStore";

export const store = createStore(userReducer, {
    isLogined: false,
    user: null,
});
