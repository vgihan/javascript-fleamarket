import { Component } from "../../core/component";

export class MainHeader extends Component {
    template() {
        return `<div class="main_category_btn">
        <img>
      </div>
      <div class="main_locate_btn">
        <img>
        <p>${this.props.locate}</p>
      </div>
      <div class="main_login_btn">
        <img>
      </div>
      <div class="main_menu_btn">
        <img>
      </div>`;
    }
}
