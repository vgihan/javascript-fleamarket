import { Category } from "../components/category/category";
import { Main } from "../components/main/main";
import { Login } from "../components/login/login";

const routeMap = {
    "/": Main,
    "/category": Category,
    "/login-page": Login,
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
