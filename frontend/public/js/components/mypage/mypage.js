import { Component } from "../../core/component";
import { routing } from "../../router/router";
import { store } from "../../store/store";

export class Mypage extends Component {
    template() {
        const {
            user: { userId },
        } = store.getState();
        return `<div class="mypage_wrap">
            <div class="header">
                <a href="" class="back_btn">
                    <img src="assets/img/left_empty_arrow.png" />
                </a>
                <p>내 계정</p>
            </div>
            <div class="mypage_contents">
                <div class="contents_username">
                    <p>${userId}</p>
                </div>
                <form action="/auth/github/logout" method="GET">
                    <input type="submit" value="로그아웃"/>
                </form>
            </div>
        </div>`;
    }
    setEvent() {
        const backBtn = document.querySelector(".header > a");

        backBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.history.back();
        });
    }
}
