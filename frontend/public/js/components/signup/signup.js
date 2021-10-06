import { Component } from "../../core/component";

export class Signup extends Component {
    template() {
        const submitBtnOption = {
            true: "",
            false: 'class="inactive" disabled',
        };
        return `<div class="signup_wrap">
            <div class="header">
                <a href="javascript:history.back()" class="back_btn">
                    <img src="assets/img/left_empty_arrow.png" />
                </a>
                <p>회원가입</p>
            </div>
            <div class="signup_contents">
                <form action="/auth/github/signup" method="POST">
                    <label for="locate">우리 동네</label>
                    <input type="text" name="locate" id="locate" placeholder="시∙구 제외, 동만 입력" />
                    <input type="submit" value="회원가입" ${
                        submitBtnOption[this.state.submitState]
                    } />
                </form>
            </div>
        </div>`;
    }
    initState() {
        return { submitState: true };
    }
    setEvent() {}
}
