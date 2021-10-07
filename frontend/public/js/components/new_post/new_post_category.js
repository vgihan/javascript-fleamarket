import { Component } from "../../core/component";

export class NewPostCategory extends Component {
    template() {
        return `${this.state.categories.reduce((pre, category, i) => {
            pre += `<label for="cate_${i + 1}" id="cate_${i + 1}" class="${
                this.state.selected === i + 1 ? "selected" : ""
            }">${category}</label>
                    <input type="radio" name="category" id="cate_${
                        i + 1
                    }" value="${category}" ${
                i === this.state.selected ? "checked='checked'" : ""
            }/>`;
            return pre;
        }, "")}`;
    }
    initState() {
        const shuffle = (arr) => {
            arr.sort(() => Math.random() - 0.5);
            return arr;
        };
        return {
            selected: 1,
            categories: shuffle([
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
            ]),
        };
    }
    setEvent() {
        this.$parent.querySelectorAll("label").forEach((element) => {
            element.addEventListener("click", (e) => {
                this.setState({
                    selected: parseInt(e.currentTarget.id.split("_")[1]),
                });
                console.log(this.state);
            });
        });
    }
}
