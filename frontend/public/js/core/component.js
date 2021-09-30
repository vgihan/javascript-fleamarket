export class Component {
    constructor($parent, props) {
        this.$parent = $parent;
        this.props = props;
        this.render();
    }
    mounted() {}
    render() {
        this.$parent.innerHTML = this.template();
        this.setEvent();
        this.mounted();
    }
    setEvent() {}
    template() {}
}
