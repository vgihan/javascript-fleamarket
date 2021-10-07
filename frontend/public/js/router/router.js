import { Category } from "../components/category/category";
import { Main } from "../components/main/main";
import { Login } from "../components/login/login";
import { Signup } from "../components/signup/signup";
import { NewPost } from "../components/new_post/new_post";
import { Mypage } from "../components/mypage/mypage";
import { Detail } from "../components/detail/detail";

const routeMap = {
    "/": Main,
    "/category": Category,
    "/login-page": Login,
    "/signup-page": Signup,
    "/new-post": NewPost,
    "/mypage": Mypage,
    "/detail": Detail,
};
export function initRouter() {
    renderComponent();
    window.addEventListener("popstate", renderComponent);
}
export function routing(path) {
    window.history.pushState({}, null, path);
    renderComponent();
}
function renderComponent() {
    const path = window.location.pathname;
    const queryParams = new URLSearchParams(location.search);
    const props = Array.from(queryParams.keys()).reduce((pre, key) => {
        pre[key] = queryParams.get(key);
        return pre;
    }, {});
    const $root = document.querySelector(".root");
    new routeMap[path]($root, props);
}
