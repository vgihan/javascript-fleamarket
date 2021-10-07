import { Component } from "../../core/component";
import { store } from "../../store/store";
import { newPostCheckChange } from "../../action/user";
import { NewPostImg } from "./new_post_img";
import { NewPostCategory } from "./new_post_category";

export class NewPostContents extends Component {
    template() {
        const { user } = store.getState();

        return `<form id="newpost" action="/item" method="POST">
            <input type="hidden" name="user_uid" value="${user.userId}">
            <div class="contents_add_img">

            </div>
            <div class="contents_add_title">
                <input type="text" name="title" placeholder='글 제목'/>
                <div class="category_box">
                    <p>(필수) 카테고리를 선택해주세요.</p>
                    <div class="category_element"></div>
                </div>
            </div>
            <div class="contents_add_price">
                <input type="text" name="price" placeholder='$ 가격(선택사항)'/>
            </div>
            <div class="contents_add_word">
                <textarea name="contents" wrap="virtual" placeholder='게시글 내용을 작성해주세요.'></textarea>
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
        const $imgs = this.$parent.querySelector(".contents_add_img");
        const $category = this.$parent.querySelector(".category_element");

        new NewPostImg($imgs, {});
        new NewPostCategory($category, {});
    }
    initState() {
        return {
            isAllInput: false,
            isTitleInput: false,
            imgs: [],
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
