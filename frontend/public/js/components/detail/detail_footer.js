import { Component } from "../../core/component";
import { store } from "../../store/store";

export class DetailFooter extends Component {
    template() {
        const { like, price, seller } = this.props;
        const { user } = store.getState();

        return `<div class="like_price_box">
            <div class="like_box">
                <img src="assets/img/${like ? "wish_heart" : "heart"}.png">
            </div>
            <div class="price_box">
                <p>${price.toLocaleString()}원</p>
            </div>
        </div>
        <div class="chat_box">
            <button type="button">${
                user?.userId === seller ? "채팅 목록 보기" : "문의하기"
            }</button>
        </div>`;
    }
    initState() {
        return {
            imgs: [],
            num: { chat: null, heart: null, view: null },
            seller: null,
            locate: null,
            like: false,
            price: null,
        };
    }
    async asyncUpdate() {}
}
