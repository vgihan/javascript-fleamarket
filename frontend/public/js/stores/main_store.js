import { registState } from "../core/channel";

export const mainStore = {
    state: registState({
        locate: "전체",
        items: [
            {
                id: "ididid",
                img: "img",
                title: "파랑 선풍기",
                locate: "역삼동",
                time: "2시간 전",
                price: "24,500원",
                heart: "",
                comments: 3,
            },
        ],
    }),
    setState(newState) {
        Object.keys(newState).forEach((key) => {
            if (this.state[key]) this.state[key] = newState[key];
        });
    },
};
