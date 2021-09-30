const { Main } = require("../components/main/main");

const routeMap = {
    "/": Main,
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
