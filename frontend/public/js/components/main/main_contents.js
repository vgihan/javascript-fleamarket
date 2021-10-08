import { Component } from "../../core/component";
import { routing } from "../../router/router";
import { store } from "../../store/store";
import { makeQuery } from "../../utils/make_query";
import { postWishlist, deleteWishlist } from "../../asyncs/wishlist";

export class MainContents extends Component {
    template() {
        return `<div class="main_contents_wrap">
            ${this.state.items.reduce((pre, content) => {
                const time = parseInt(
                    (new Date() - new Date(content.createdAt)) / 60000
                );
                pre += `<div class="main_content_element" data-id="${
                    content.IID
                }">
                    <div class="content_img_box">
                        <img src='${content.IMG}'/>
                    </div>
                    <div class="content_info_box">
                        <div class="word_info">
                            <p class="title">${content.TITLE}</p>
                            <p class="locate_time">${content.LOCATE} ∙ ${
                    time >= 60 ? parseInt(time / 60) : parseInt(time)
                } ${time >= 60 ? "시간 전" : "분 전"}</p>
                            <p class="price">${content.PRICE.toLocaleString()} 원</p>
                        </div>
                        <div class="icon_info">
                            <img src="assets/img/${
                                content.WID ? "wish_heart" : "heart"
                            }.png" data-like="${content.WID ? 1 : 0}"/>
                            ${
                                content.CHAT_NUM === 0
                                    ? ""
                                    : ` <div class="comment">
                                            <img src="assets/img/chat_icon.png"/>
                                            <p class="num">${content.CHAT_NUM}</p>
                                        </div>`
                            }
                        </div>
                    </div>
                </div>`;
                return pre;
            }, ``)}
        </div>`;
    }
    setEvent() {
        const $contents = this.$parent.querySelector(".main_contents_wrap");

        const toggleLike = async (e) => {
            const { isLogined } = store.getState();
            const $wishIcon = e.target.closest(".icon_info > img");
            const $content = e.target.closest(".main_content_element");
            if (!$wishIcon || !isLogined) return;
            const toggles = [
                { src: "assets/img/wish_heart.png", request: postWishlist },
                { src: "assets/img/heart.png", request: deleteWishlist },
            ];
            const isLike = $wishIcon.getAttribute("data-like");
            const userId = store.getState().user.userId;
            const itemId = $content.getAttribute("data-id");
            $wishIcon.src = toggles[isLike].src;
            $wishIcon.setAttribute("data-like", (parseInt(isLike) + 1) % 2);
            await toggles[isLike].request(userId, itemId);
        };
        $contents.addEventListener("click", (e) => {
            const $likeBtn = e.target.closest(".icon_info > img");
            const $content = e.target.closest(".main_content_element");
            if ($likeBtn) {
                toggleLike(e);
                return;
            }
            if ($content) {
                const query = makeQuery({
                    item_id: $content.getAttribute("data-id"),
                });
                routing(`/detail?${query}`);
            }
        });
    }
    initState() {
        return { items: [] };
    }
    async asyncUpdate() {
        const globalState = store.getState();
        const locate = globalState?.user?.locate;
        const category = globalState.category;
        const queryString = makeQuery({ locate, category });
        const res = await fetch(`/item?${queryString}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const items = await res.json();
        this.setState({ items });
    }
}
