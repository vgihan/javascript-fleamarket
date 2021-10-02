import { Component } from "../../core/component";

export class Category extends Component {
    template() {
        const categories = [
            "디지털 기기",
            "생활가전",
            "가구/인테리어",
            "게임/취미",
            "생활/가공식품",
            "스포츠/레저",
            "여성패션/잡화",
            "남성패션/잡화",
            "유아동",
            "뷰티/미용",
            "반려동물",
            "도서/티켓/음반",
            "식물",
            "기타",
        ];
        return `<div class="category_wrap">
            <div class="category_header">
                <img src="assets/img/left_empty_arrow.png"/>
                <p>카테고리</p>
            </div>
            <div class="category_contents">
                <div class="contents_wrap">
                    ${categories.reduce((pre, category) => {
                        pre += `<div class="content_box">
                                    <div class="category_img"></div>
                                    <div class="category_title">
                                        <p>${category}</p>
                                    </div>
                                </div>`;
                        return pre;
                    }, "")}
                </div>
            </div>
        </div>`;
    }
}
