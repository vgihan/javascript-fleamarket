import "../../css/index.scss";
import "../../img/locate_btn.png";
import "../../img/login_btn.png";
import "../../img/main_category_btn.png";
import "../../img/menu_btn.png";
import "../../img/chat_icon.png";
import "../../img/heart.png";
import "../../img/wish_heart.png";
import "../../img/left_empty_arrow.png";
import "../../img/img_icon.png";
import "../../img/locate_icon.png";

import { initRouter } from "../router/router";
import { store } from "../store/store";
import { checkLoginAsync } from "../action/user";

initStore();
initRouter();

function initStore() {
    console.log(new Date().getTime());
    const { dispatch } = store;
    checkLoginAsync()(dispatch);
}
