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
            CATEGORY: params.category,
        });
    }
    async findItem(params) {
        return await this.models.ITEM.findAll({
            where: params,
        });
    }
    async updateItem(params) {
        const iid = params.iid;
        delete params["iid"];
        return await this.models.ITEM.update(
            {
                USER_UID: params.user_uid,
                TITLE: params.title,
                PRICE: params.price,
                CONTENTS: params.contents,
                CATEGORY: params.category,
                STATE: params.state,
            },
            { where: { IID: iid } }
        );
    }
    async deleteItem(params) {
        return await this.models.ITEM.destroy({ where: params });
    }
};
