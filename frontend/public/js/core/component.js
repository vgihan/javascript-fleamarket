export class Component {
    state;
    props;
    $parent;
    constructor($parent, props) {
        this.$parent = $parent;
        this.props = props;
        this.state = this.initState();
        this.setup();
        this.render();
        this.asyncUpdate();
    }
    setup() {}
    initState() {
        return {};
    }
    render = () => {
        this.$parent.innerHTML = this.template();
        this.setEvent();
        this.mounted();
    };
    setState(newState) {
        Object.keys(newState).forEach((key) => {
            if (!this.state[key]) return;
            this.state[key] = newState[key];
        });
        this.render();
    }
    asyncUpdate() {}
    mounted() {}
    setEvent() {}
    template() {}
}
