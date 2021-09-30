import { Component } from "../../core/component";
import { MainHeader } from "./main_header";
import { MainContents } from "./main_contents";
import { mainStore } from "../../stores/main_store";

export class Main extends Component {
    template() {
        return `<div class="main">
            <div class="main_header"></div>
            <div class="main_contents"></div>
            <div class="main_write_btn">
                <p>+</p>
            </div>
        </div>`;
    }
    mounted() {
        const $header = document.querySelector(".main_header");
        const $contents = document.querySelector(".main_contents");

        new MainHeader($header, mainStore.state.locate);
        new MainContents($contents, mainStore.state.items);
    }
    setEvent() {
        document
            .querySelector(".main_write_btn")
            .addEventListener("click", () => {
                mainStore.setState({
                    items: [
                        {
                            id: "ididid",
                            img: "img",
                            title: "파랑 선풍기",
                            locate: "역삼동",
                            time: "2시간 전",
                            price: "24,500원",
                            heart: "",
                            comments: 3,
                        },
                        {
                            id: "ididid",
                            img: "img",
                            title: "파랑 선풍기",
                            locate: "역삼동",
                            time: "2시간 전",
                            price: "24,500원",
                            heart: "",
                            comments: 3,
                        },
                    ],
                });
            });
    }
}
