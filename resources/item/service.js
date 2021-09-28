const uuid = require("uuid");

module.exports = class ItemService {
    constructor(models) {
        this.models = models;
    }
    async registItem(params) {
        const id = uuid.v4();
        return await this.models.ITEM.create({
            IID: id,
            USER_UID: params.user_uid,
            TITLE: params.title,
            PRICE: params.price,
            CONTENTS: params.contents,
            LOCATE: params.locate,
            CATEGORY: params.category,
        });
    }
};
