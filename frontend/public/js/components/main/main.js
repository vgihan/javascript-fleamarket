import { Component } from "../../core/component";
import { MainHeader } from "./main_header";
import { MainContents } from "./main_contents";

export class Main extends Component {
    template() {
        return `<div class="main">
        <div class="main_header"></div>
        <div class="main_contents"></div>
        <div class="main_write_btn"></div>
      </div>`;
    }
    mounted() {
        const $header = document.querySelector(".main_header");
        const $contents = document.querySelector(".main_contents");

        new MainHeader($header);
        new MainContents($contents);
    }
    setEvent() {
        document
            .querySelector(".main_write_btn")
            .addEventListener("click", () => {});
    }
}
