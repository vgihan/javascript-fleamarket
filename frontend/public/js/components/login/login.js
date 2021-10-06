import { Component } from "../../core/component";
import { routing } from "../../router/router";

export class Login extends Component {
    template() {
        return `<div class="login_wrap">
            <div class="header">
                <a href="" class="back_btn">
                    <img src="assets/img/left_empty_arrow.png" />
                </a>
                <p>로그인</p>
            </div>
            <div class="login_box">
                <form action="/auth/github" method="GET">
                    <input type="submit" value="로그인"/>
                </form>
            </div>
            <div class="signup_box">
                <a href="/signup-page">회원가입</a>
            </div>
        </div>`;
    }
    setEvent() {
        const signupBtn = document.querySelector(".signup_box > a");
        const backBtn = document.querySelector(".header > a");

        backBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.history.back();
        });
        signupBtn.addEventListener("click", (e) => {
            e.preventDefault();
            routing("/signup-page");
        });
    }
}
