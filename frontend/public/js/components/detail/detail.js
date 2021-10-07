import { lookupItem } from "../../asyncs/lookup";
import { Component } from "../../core/component";
import { makeQuery } from "../../utils/make_query";
import { DetailContents } from "./detail_contents";
import { DetailFooter } from "./detail_footer";
import { DetailImg } from "./detail_img";
import { DetailState } from "./detail_state";

export class Detail extends Component {
    template() {
        return `<div class="detail_wrap">
            <div class="detail_container">
                <div class="detail_img_box"></div>
                <div class="detail_state_box"></div>
                <div class="detail_contents"></div>
                <div class="detail_footer"></div>
            </div>
        </div>`;
    }
    mounted() {
        const {
            state,
            locate,
            imgs,
            num,
            seller,
            category,
            contents,
            like,
            price,
            time,
            title,
        } = this.state;

        const $img = this.$parent.querySelector(".detail_img_box");
        const $state = this.$parent.querySelector(".detail_state_box");
        const $contents = this.$parent.querySelector(".detail_contents");
        const $footer = this.$parent.querySelector(".detail_footer");

        new DetailImg($img, { imgs });
        new DetailState($state, { state });
        new DetailContents($contents, {
            locate,
            num,
            seller,
            time,
            title,
            category,
            contents,
        });
        new DetailFooter($footer, {
            like,
            price,
            seller,
            iid: this.props.item_id,
            setParentState: this.setState,
        });
    }
    initState() {
        return {
            locate: "",
            imgs: [],
            num: { chat: "", heart: "", view: "" },
            seller: "",
            like: false,
            price: "",
            time: 0,
            state: null,
            title: "",
            category: "",
            contents: "",
        };
    }
    async asyncUpdate() {
        await lookupItem(this.props.item_id);
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
            title: item.TITLE,
            category: item.CATEGORY,
            contents: item.CONTENTS,
        });
    }
}
