import { Component } from "../../core/component";

export class MainHeader extends Component {
    template() {
        return `<div class="main_category_btn header_element">
        <img src='assets/img/main_category_btn.png'>
      </div>
      <div class="main_locate_btn header_element">
        <img src='assets/img/locate_btn.png'>
        <p>전체</p>
      </div>
      <div class="main_login_btn header_element">
        <img src='assets/img/login_btn.png'>
      </div>
      <div class="main_menu_btn header_element">
        <img src='assets/img/menu_btn.png'>
      </div>`;
    }
}
