import { Component } from "../../core/component";
import { routing } from "../../router/router";

export class Detail extends Component {
    template() {
        return ``;
    }
    initState() {
        return {
            imgs: [],
            num: { chat: null, heart: null, view: null },
            seller: null,
            locate: null,
            like: false,
            price: null,
        };
    }
    async asyncUpdate() {}
}
