import { Component } from "../../core/component";
import { makeQuery } from "../../utils/make_query";
import { DetailContents } from "./detail_contents";
import { DetailFooter } from "./detail_footer";
import { DetailImg } from "./detail_img";
import { DetailState } from "./detail_state";

export class Detail extends Component {
    template() {
        return `<div class="detail_wrap">
            <div class="detail_img_box"></div>
            <div class="detail_state_box"></div>
            <div class="detail_contents"></div>
            <div class="detail_footer"></div>
        </div>`;
    }
    mounted() {
        const { state, locate, imgs, num, seller, like, price, time } =
            this.state;

        const $img = this.$parent.querySelector(".detail_img_box");
        const $state = this.$parent.querySelector(".detail_img_box");
        const $contents = this.$parent.querySelector(".detail_img_box");
        const $footer = this.$parent.querySelector(".detail_img_box");

        new DetailImg($img, { imgs });
        new DetailState($state, { state });
        new DetailContents($contents, { locate, num, seller, time });
        new DetailFooter($footer, { like, price });
    }
    initState() {
        return {
            locate: null,
            imgs: [],
            num: { chat: null, heart: null, view: null },
            seller: null,
            like: false,
            price: null,
            time: null,
            state: null,
        };
    }
    async asyncUpdate() {
        const query = makeQuery({ iid: this.props.item_id });
        const res = await fetch(`/item?${query}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const item = (await res.json())[0];
        this.setState({
            locate: item.LOCATE,
            num: {
                chat: item.CHAT_NUM,
                heart: item.HEART_NUM,
                view: item.LOOKUP_NUM,
            },
            seller: item.USER_UID,
            like: Boolean(item.WID),
            price: item.PRICE,
            time: (new Date() - new Date(item.createdAt)) / 60000,
            state: item.STATE,
        });
    }
}
