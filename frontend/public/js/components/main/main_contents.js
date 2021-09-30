import { Component } from "../../core/component";

export class MainContents extends Component {
    // {
    //     id: "sfadasdf",
    //     img: "asdf",
    //     title: "asdfasdfasdf",
    //     locate: "asdf",
    //     time: 123,
    //     price: 123,
    //     heart: true,
    //     comments: 3,
    // };
    template() {
        return `<div class="main_contents_wrap">
        ${this.props.contents.reduce((pre, content) => {
            pre += `<div class="main_content_element data-id=${this.props.id}">
                <div class="content_img_box">
                    <img src='${this.props.img}'/>
                </div>
                <div class="content_info_box">
                    <div class="word_info">
                        <p class="title">${this.props.title}</p>
                        <p class="locate_time">${this.props.locate} - ${this.props.time}</p>
                        <p class="price">${this.props.price}</p>
                    </div>
                    <div class="icon_info">
                        <div class="heart ${this.props.heart}"></div>
                        <div class="comment">
                            <img />
                            <p class="num">${this.props.comments}</p>
                        </div>
                    </div>
                </div>
            </div>`;
            return pre;
        }, ``)}
    </div>`;
    }
}
