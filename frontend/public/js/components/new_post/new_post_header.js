import { Component } from "../../core/component";
import { store } from "../../store/store";

export class NewPostHeader extends Component {
    template() {
        const { isAllCheck } = store.getState();
        return `<a href="javascript:history.back()" class="back_btn">
                    <img src="assets/img/left_empty_arrow.png" />
                </a>
                <p>글쓰기</p>
                <button type="submit" form="newpost" ${
                    isAllCheck ? "" : "disabled"
                }>
                    <img src="assets/img/${
                        isAllCheck ? "enable" : "disable"
                    }_check_icon.png"/>
                </button>`;
    }
}
