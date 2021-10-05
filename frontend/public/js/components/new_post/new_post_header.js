import { Component } from "../../core/component";
import { store } from "../../store/store";

export class NewPostHeader extends Component {
    setup() {
        store.subscribe(this.render);
    }
    template() {
        return `<a href="javascript:history.back()" class="back_btn">
                    <img src="assets/img/left_empty_arrow.png" />
                </a>
                <p>글쓰기</p>
                <a href="" class="submit_btn" >
                    <img src="assets/img/enable_check_icon.png"/>
                </a>`;
    }
}
