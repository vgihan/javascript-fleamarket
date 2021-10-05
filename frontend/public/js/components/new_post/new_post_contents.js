import { Component } from "../../core/component";
import { store } from "../../store/store";
import { newPostCheckChange } from "../../action/user";

export class NewPostContents extends Component {
    setup() {
        store.subscribe(this.render);
    }
    template() {
        const { user } = store.getState();
        return `<div class="contents_add_img">
                    <div class="add_img_box">
                        <label for="imgs">
                            <img src='assets/img/img_icon.png'/>
                            <p>0/10</p>
                        </label>
                        <input type="file" name="imgs" id="imgs" multiple />
                    </div>
                </div>
                <div class="contents_add_title">
                    <input type="text" name="title" placeholder='글 제목'/>
                </div>
                <div class="contents_add_price">
                    <input type="text" name="price" placeholder='$ 가격(선택사항)'/>
                </div>
                <div class="contents_add_word">
                    <textarea name="word" wrap="virtual" placeholder='게시글 내용을 작성해주세요.'></textarea>
                </div>
                <div class="contents_add_locate">
                    <img src="assets/img/locate_icon.png"/>
                    <input type="text" name="locate" value="${
                        user ? user.LOCATE : ""
                    }" readonly />
                </div>`;
    }
    initState() {
        return {
            isAllInput: false,
        };
    }
    setEvent() {
        const $title = this.$parent.querySelector(
            ".contents_add_title > input"
        );
        const $price = this.$parent.querySelector(
            ".contents_add_price > input"
        );
        const $word = this.$parent.querySelector(
            ".contents_add_word > textarea"
        );
        const $inputs = [$title, $price, $word];
        const checkAllInput = ($elements) => (e) => {
            const isAllInput = $elements.reduce((pre, element) => {
                if (element.value.length === 0) pre = false;
                return pre;
            }, true);
            if (!isAllInput) return;
            store.dispatch(newPostCheckChange(true));
        };

        $title.addEventListener("keyup", checkAllInput($inputs));
        $price.addEventListener("keyup", checkAllInput($inputs));
        $word.addEventListener("keyup", checkAllInput($inputs));
    }
}
