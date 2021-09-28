const uuid = require("uuid");

module.exports = class ChatService {
    constructor(models) {
        this.models = models;
    }
    async registChat(params) {
        return await this.models.CHAT.create({
            ITEM_IID: params.item_iid,
            SENDER: params.sender,
            RECVER: params.recver,
            CONTENTS: params.contents,
        });
    }
};
