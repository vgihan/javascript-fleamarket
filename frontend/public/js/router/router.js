import { Category } from "../components/category/category";
import { Main } from "../components/main/main";
import { Login } from "../components/login/login";
import { Signup } from "../components/signup/signup";
import { NewPost } from "../components/new_post/new_post";

const routeMap = {
    "/": Main,
    "/category": Category,
    "/login-page": Login,
    "/signup-page": Signup,
    "/new-post": NewPost,
};
export function initRouter() {
    renderComponent();
    console.log(new Date().getTime());
    window.addEventListener("popstate", renderComponent);
}
export function route(path) {
    window.history.pushState({}, null, path);
    renderComponent();
}
function renderComponent() {
    const path = window.location.pathname;
    const $root = document.querySelector(".root");
    new routeMap[path]($root, {});
}
