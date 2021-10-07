import { Component } from "../../core/component";
import { store } from "../../store/store";
import { newPostCheckChange } from "../../action/user";
import { NewPostImg } from "./new_post_img";

export class NewPostContents extends Component {
    template() {
        const { user } = store.getState();
        return `<form id="newpost" action="/item" method="POST">
            <div class="contents_add_img">
                
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
                    user ? user.locate : ""
                }" readonly />
            </div>
        </form>`;
    }
    mounted() {
        const $img = this.$parent.querySelector(".contents_add_img");

        new NewPostImg($img, {});
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
            if (!isAllInput) store.dispatch(newPostCheckChange(false));
            else store.dispatch(newPostCheckChange(true));
        };

        $title.addEventListener("keyup", checkAllInput($inputs));
        $price.addEventListener("keyup", checkAllInput($inputs));
        $word.addEventListener("keyup", checkAllInput($inputs));
    }
}
