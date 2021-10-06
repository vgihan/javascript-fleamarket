import { Component } from "../../core/component";
import { routing } from "../../router/router";
import { store } from "../../store/store";

export class MainHeader extends Component {
    setup() {
        store.subscribe(this.render);
    }
    template() {
        const { user, isLogined } = store.getState();
        return `<div class="main_category_btn header_element">
          <a href="/category">
            <img src='assets/img/main_category_btn.png'>
          </a>
        </div>
        <div class="main_locate_btn header_element">
          <img src='assets/img/locate_btn.png'>
          <p>${user ? user.locate : "전체"}</p>
        </div>
        <div class="main_login_btn header_element">
          <a href="" data-url="${isLogined ? "/mypage" : "/login-page"}">
            <img src='assets/img/login_btn.png'>
          </a>
        </div>
        <div class="main_menu_btn header_element">
          <a href="/menu">
            <img src='assets/img/menu_btn.png'>
          </a>
        </div>`;
    }
    setEvent() {
        const categoryBtn = document.querySelector(".main_category_btn > a");
        const loginBtn = document.querySelector(".main_login_btn > a");
        const menuBtn = document.querySelector(".main_menu_btn > a");

        categoryBtn.addEventListener("click", (e) => {
            e.preventDefault();
            routing("/category");
        });
        loginBtn.addEventListener("click", (e) => {
            e.preventDefault();
            routing(loginBtn.getAttribute("data-url"));
        });
        menuBtn.addEventListener("click", (e) => {
            e.preventDefault();
            routing("/menu");
        });
    }
}
