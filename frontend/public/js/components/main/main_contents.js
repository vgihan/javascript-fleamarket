import { Component } from "../../core/component";

export class MainContents extends Component {
    template() {
        console.log(this.state);
        return `<div class="main_contents_wrap">
            ${this.state.items.reduce((pre, content) => {
                pre += `<div class="main_content_element" data-id="${
                    content.IID
                }">
                    <div class="content_img_box">
                        <img src='${content.IMG}'/>
                    </div>
                    <div class="content_info_box">
                        <div class="word_info">
                            <p class="title">${content.TITLE}</p>
                            <p class="locate_time">${
                                content.LOCATE
                            } - ${parseInt(
                    (new Date() - new Date(content.createdAt)) / 60000
                )} 분 전</p>
                            <p class="price">${content.PRICE.toLocaleString()} 원</p>
                        </div>
                        <div class="icon_info">
                            <div class="heart ${content.HEART_NUM}"></div>
                            <div class="comment">
                                <img />
                                <p class="num">${content.CHAT_NUM}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
                return pre;
            }, ``)}
        </div>`;
    }
    initState() {
        return { items: [] };
    }
    async asyncUpdate() {
        const res = await fetch("/item", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const items = await res.json();
        this.setState({ items });
    }
}
