import { Component } from "../../core/component";

export class Signup extends Component {
    template() {
        const submitBtnOption = {
            true: "",
            false: 'class="inactive" disabled',
        };
        return `<div class="signup_wrap">
            <div class="header">
                <img src="assets/img/left_empty_arrow.png" />
                <p>회원가입</p>
            </div>
            <div class="signup_contents">
                <form action="/signup" method="POST">
                    <label for="user_id">아이디</label>
                    <input type="text" name="user_id" id="user_id" placeholder="영문, 숫자 조합 20자 이하" />
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
