import { Component } from "../../core/component";

export class MainHeader extends Component {
    template() {
        return `<div class="main_category_btn header_element">
          <a href="/category">
            <img src='assets/img/main_category_btn.png'>
          </a>
        </div>
        <div class="main_locate_btn header_element">
          <img src='assets/img/locate_btn.png'>
          <p>${this.props.locate}</p>
        </div>
        <div class="main_login_btn header_element">
          <a href="/login-page">
            <img src='assets/img/login_btn.png'>
          </a>
        </div>
        <div class="main_menu_btn header_element">
          <a href="/menu">
            <img src='assets/img/menu_btn.png'>
          </a>
        </div>`;
    }
}
