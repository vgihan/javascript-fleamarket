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
    async findItem(params) {
        const conditions = this.setCondition(vaildCons, params);
        return await this.models.ITEM.findAll({
            where: conditions,
        });
    }
    setCondition(vaildCons, params) {
        return vaildCons.reduce((pre, con) => {
            if (params[con]) pre[con] = params[con];
            return pre;
        }, {});
    }
};
