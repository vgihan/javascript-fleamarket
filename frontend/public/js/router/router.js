import { Category } from "../components/category/category";
import { Main } from "../components/main/main";

const routeMap = {
    "/": Main,
    "/category": Category,
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
