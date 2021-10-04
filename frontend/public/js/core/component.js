export class Component {
    state;
    props;
    $parent;
    constructor($parent, props) {
        this.$parent = $parent;
        this.props = props;
        this.state = this.initState();
        this.render();
        this.setEvent();
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
    }
    asyncUpdate() {}
    mounted() {}
    render() {
        this.$parent.innerHTML = this.template();
        this.setEvent();
        this.mounted();
    }
    setEvent() {}
    template() {}
}
