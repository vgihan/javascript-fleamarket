import { subscribe } from "./channel";

export class Component {
    state;
    props;
    $parent;
    constructor($parent, props) {
        this.$parent = $parent;
        this.props = props;
        this.state = this.initState();
        subscribe(() => {
            this.render();
            this.setEvent();
            this.mounted();
        });
        this.asyncUpdate();
    }
    initState() {
        return {};
    }
    setState(newState) {
        Object.keys(newState).forEach((key) => {
            if (!this.state[key]) return;
            this.state[key] = newState[key];
        });
        this.render();
        this.setEvent();
        this.mounted();
    }
    asyncUpdate() {}
    mounted() {}
    render() {
        this.$parent.innerHTML = this.template();
    }
    setEvent() {}
    template() {}
}
