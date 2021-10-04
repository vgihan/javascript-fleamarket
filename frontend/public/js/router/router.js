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
    routing();
    window.addEventListener("popstate", routing);
}

function routing() {
    const path = window.location.pathname;
    const $root = document.querySelector(".root");
    new routeMap[path]($root, {});
}
