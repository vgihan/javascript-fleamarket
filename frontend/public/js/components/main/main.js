import { Component } from "../../core/component";
import { MainHeader } from "./main_header";
import { MainContents } from "./main_contents";
import { routing } from "../../router/router";
import { store } from "../../store/store";

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
        const writeBtn = document.querySelector(".main_write_btn");

        writeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const state = store.getState();
            if (!state.isLogined) {
                alert("글 쓰기는 로그인이 필요합니다.");
                routing("/login-page");
                return;
            }
            routing("/new-post");
        });
    }
}
