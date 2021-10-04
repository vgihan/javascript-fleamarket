import { Component } from "../../core/component";
import { MainHeader } from "./main_header";
import { MainContents } from "./main_contents";
import { route } from "../../router/router";

export class Main extends Component {
    template() {
        return `<div class="main">
            <div class="main_header"></div>
            <div class="main_contents"></div>
            <div class="main_write_btn">
                <a href="/new-post">+</a>
            </div>
        </div>`;
    }
    mounted() {
        const $header = document.querySelector(".main_header");
        const $contents = document.querySelector(".main_contents");

        new MainHeader($header, { locate: "전체" });
        new MainContents($contents, {});
    }
    setEvent() {
        const writeBtn = document.querySelector(".main_write_btn > a");

        writeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            route("/new-post");
        });
    }
}
