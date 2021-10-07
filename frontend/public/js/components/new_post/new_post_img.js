import { Component } from "../../core/component";

export class NewPostImg extends Component {
    template() {
        return `<div class="add_img_box">
                    <label for="img">
                        <img src='assets/img/img_icon.png'/>
                        <p>${this.state.imgs.length}/10</p>
                    </label>
                    <input type="file" name="img" id="img" enctype="multipart/form-data" multiple />
                </div>
                ${this.state.imgs.reduce((pre, src) => {
                    pre += `<div class="img_container">
                        <img src="${src}">
                        <button type="button">x</button>
                    </div>`;
                    return pre;
                }, "")}`;
    }
    initState() {
        return {
            imgs: [],
        };
    }
    setEvent() {
        const $imgInput = this.$parent.querySelector("#img");
        const pushImg = (changeEvent) => {
            const reader = new FileReader();
            const upload = (loadEvent) =>
                this.setState({
                    imgs: [...this.state.imgs, loadEvent.target.result],
                });
            reader.addEventListener("load", upload);
            reader.readAsDataURL(changeEvent.target.files[0]);
        };
        $imgInput.addEventListener("change", pushImg);
    }
}
