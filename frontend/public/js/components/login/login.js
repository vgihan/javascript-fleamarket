import { Component } from "../../core/component";
import { routing } from "../../router/router";

export class Login extends Component {
    template() {
        return `<div class="login_wrap">
            <div class="header">
                <a href="" onclick="window.history.back()" class="back_btn">
                    <img src="assets/img/left_empty_arrow.png" />
                </a>
                <p>로그인</p>
            </div>
            <div class="login_box">
                <form action="/auth/local/login" method="POST">
                    <input type="text" name="userId" placeholder="아이디를 입력하세요." required/>
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

        signupBtn.addEventListener("click", (e) => {
            e.preventDefault();
            routing("/category");
        });
    }
}
