import { Component } from "../../core/component";

export class MainContents extends Component {
    template() {
        return `<div class="main_contents_wrap">
            ${this.props.reduce((pre, content) => {
                pre += `<div class="main_content_element" data-id="${content.id}">
                    <div class="content_img_box">
                        <img src='${content.img}'/>
                    </div>
                    <div class="content_info_box">
                        <div class="word_info">
                            <p class="title">${content.title}</p>
                            <p class="locate_time">${content.locate} - ${content.time}</p>
                            <p class="price">${content.price}</p>
                        </div>
                        <div class="icon_info">
                            <div class="heart ${content.heart}"></div>
                            <div class="comment">
                                <img />
                                <p class="num">${content.comments}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
                return pre;
            }, ``)}
        </div>`;
    }
}
