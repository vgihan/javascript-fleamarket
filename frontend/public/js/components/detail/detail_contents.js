import { Component } from "../../core/component";

export class DetailContents extends Component {
    template() {
        const { locate, num, seller, time, title, category, contents } =
            this.props;
        return `<div class="title_box">
            <p class="title">${title}</p>
            <p class="category_time">${category} ∙ ${
            time < 60 ? `${time}분 전` : `${parseInt(time / 60)}시간 전`
        }</p>
        </div>
        <div class="contents_box">
            <p class="contents">${contents}</p>
        </div>
        <div class="num_box">
            <p class="chat_like_view">채팅 ${num.chat} ∙ 관심 ${
            num.heart
        } ∙ 조회 ${num.view}</p>
        </div>
        <div class="user_info_box">
            <div class="intro">판매자 정보</div>
            <div class="user_info">
                <p class="user_id">${seller}</p>
                <p class="locate">${locate}</p>
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
