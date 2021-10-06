import { Category } from "../components/category/category";
import { Main } from "../components/main/main";
import { Login } from "../components/login/login";
import { Signup } from "../components/signup/signup";
import { NewPost } from "../components/new_post/new_post";
import { store } from "../store/store";
import { Mypage } from "../components/mypage/mypage";

const { initListener } = store;
const routeMap = {
    "/": Main,
    "/category": Category,
    "/login-page": Login,
    "/signup-page": Signup,
    "/new-post": NewPost,
    "/mypage": Mypage,
};
export function initRouter() {
    renderComponent();
    window.addEventListener("popstate", renderComponent);
}
export function routing(path) {
    window.history.pushState({}, null, path);
    initListener();
    renderComponent();
}
function renderComponent() {
    const path = window.location.pathname;
    const $root = document.querySelector(".root");
    new routeMap[path]($root, {});
}
