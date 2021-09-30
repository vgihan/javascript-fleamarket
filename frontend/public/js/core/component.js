import { subscribe } from "./channel";

export class Component {
    constructor($parent, props) {
        this.$parent = $parent;
        this.props = props;
        subscribe(this.render());
    }
    mounted() {}
    render() {
        return () => {
            this.$parent.innerHTML = this.template();
            this.setEvent();
            this.mounted();
        };
    }
    setEvent() {}
    template() {}
}
