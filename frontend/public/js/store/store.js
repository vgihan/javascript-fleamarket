import { userReducer } from "../reducer/user";
import { createStore } from "./createStore";

export const store = createStore(userReducer, {
    isAllCheck: false,
    isLogined: false,
    category: null,
    user: null,
});
