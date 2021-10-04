import { Component } from "../../core/component";

export class NewPost extends Component {
    template() {
        return `<div class="header">
                <a href="javascript:history.back()" class="back_btn">
                    <img src="assets/img/left_empty_arrow.png" />
                </a>
                <p>글쓰기</p>
            </div>
            <div class="newpost_contents">
                <div class="contents_add_img">
                    <div class="add_img_box">
                        <label for="imgs">
                            <img src='assets/img/img_icon.png'/>
                            <p>0/10</p>
                        </label>
                        <input type="file" name="imgs" id="imgs" multiple />
                    </div>
                </div>
                <div class="contents_add_title">
                    <input type="text" name="title" placeholder='글 제목'/>
                </div>
                <div class="contents_add_price">
                    <input type="text" name="price" placeholder='\\ 가격(선택사항)'/>
                </div>
                <div class="contents_add_word">
                    <textarea name="word" wrap="virtual" placeholder='게시글 내용을 작성해주세요.'></textarea>
                </div>
                <div class="contents_add_locate">
                    <img src="assets/img/locate_icon.png"/>
                    <input type="text" name="locate" value="역삼동" readonly />
                </div>
            </div>`;
    }
    mounted() {}
    setEvent() {}
}
