const uuid = require("uuid");
const db = require("../../models");

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
    async findItem(params, userId) {
        const condition = Object.keys(params)
            .reduce((pre, key) => {
                pre.push(`${key}='${params[key]}'`);
                return pre;
            }, [])
            .join(" AND ");
        const subQuery = `SELECT * FROM ITEM
        LEFT OUTER JOIN (SELECT WID, ITEM_IID, USER_UID AS LIKE_UID FROM WISHLIST WHERE USER_UID = '${userId}') AS user_wishlist 
        ON ITEM.IID = user_wishlist.ITEM_IID
        ${condition.length === 0 ? "" : "WHERE " + condition};`;
        return await db.sequelize.query(subQuery);
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
