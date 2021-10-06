import { Component } from "../../core/component";
import { NewPostContents } from "./new_post_contents";
import { NewPostHeader } from "./new_post_header";

export class NewPost extends Component {
    template() {
        return `<div class="header white newpost"></div>
            <div class="newpost_contents"></div>`;
    }
    mounted() {
        const $header = this.$parent.querySelector(".header");
        const $contents = this.$parent.querySelector(".newpost_contents");

        new NewPostHeader($header, {});
        new NewPostContents($contents, {});
    }
}
