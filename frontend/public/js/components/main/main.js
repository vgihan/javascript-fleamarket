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

        new MainHeader($header, { locate: "전체" });
        new MainContents($contents, {});
    }
    setEvent() {}
}
