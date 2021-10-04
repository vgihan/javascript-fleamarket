import { Component } from "../../core/component";
import { route } from "../../router/router";
import { createStore } from "../../store/store";

export class Login extends Component {
    template() {
        return `<div class="login_wrap">
            <div class="header">
                <a href="javascript:history.back()" class="back_btn">
                    <img src="assets/img/left_empty_arrow.png" />
                </a>
                <p>로그인</p>
            </div>
            <div class="login_box">
                <input type="text" name="user_id" placeholder="아이디를 입력하세요." required/>
                <input type="submit" value="로그인"/>
            </div>
            <div class="signup_box">
                <a href="/signup-page">회원가입</a>
            </div>
        </div>`;
    }
    setEvent() {
        const submitBtn = document.querySelector(
            ".login_box > input[type=submit]"
        );
        const signupBtn = document.querySelector(".signup_box > a");

        submitBtn.addEventListener("click");
        signupBtn.addEventListener("click", (e) => {
            e.preventDefault();
            route("/category");
        });
    }
}
