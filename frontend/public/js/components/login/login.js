import { Component } from "../../core/component";

export class Login extends Component {
    template() {
        return `<div class="login_wrap">
            <div class="header">
                <img src="assets/img/left_empty_arrow.png" />
                <p>로그인</p>
            </div>
            <div class="login_box">
                <form action="/login" method="POST">
                    <input type="text" name="user_id" placeholder="아이디를 입력하세요." />
                    <input type="submit" value="로그인"/>
                </form>
            </div>
            <div class="signup_box">
                <a href="/signup-page">회원가입</a>
            </div>
        </div>`;
    }
}
