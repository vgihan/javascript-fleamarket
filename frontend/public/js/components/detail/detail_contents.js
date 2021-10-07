import { Component } from "../../core/component";
import { routing } from "../../router/router";

export class DetailContents extends Component {
    template() {
        return `<div class="title_box">
            <p class="title"></p>
            <p class="category_time"></p>
        </div>
        <div class="contents_box">
            <p class="contents"></p>
        </div>
        <div class="num_box">
            <p class="chat_like_view"></p>
        </div>
        <div class="user_info_box">
            <div class="intro"></div>
            <div class="user_info">
                <p class="user_id"></p>
                <p class="locate"></p>
            </div>
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
