import { Component } from "../../core/component";
import { store } from "../../store/store";
import { postWishlist, deleteWishlist } from "../../asyncs/wishlist";

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
    setEvent() {
        const $likeBtn = this.$parent.querySelector(".like_box > img");

        $likeBtn.addEventListener("click", async (e) => {
            const { isLogined, user } = store.getState();
            const { setParentState, iid, like } = this.props;
            if (!isLogined) return;
            const nextLike = Boolean(like ^ true);
            setParentState({ like: nextLike });
            if (nextLike) await postWishlist(user.userId, iid);
            else await deleteWishlist(user.userId, iid);
        });
    }
}
