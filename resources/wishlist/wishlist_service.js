const uuid = require("uuid");
const { sequelize } = require("../../models");

module.exports = class ChatService {
    constructor(models) {
        this.models = models;
    }
    async registWishlist(params) {
        const wishlistMsg = await this.models.WISHLIST.create({
            USER_UID: params.user_uid,
            ITEM_IID: params.item_iid,
        });
        const itemMsg = await this.models.ITEM.increment(
            {
                HEART_NUM: 1,
            },
            { where: { IID: params.item_iid } }
        );
        return { wishlistMsg, itemMsg };
    }
    async findWishlist(params) {
        return await this.models.WISHLIST.findAll({
            where: params,
            include: [
                {
                    model: this.models.ITEM,
                },
            ],
        });
    }
    async deleteWishlist(params) {
        const wishlistMsg = await this.models.WISHLIST.destroy({
            where: params,
        });
        const itemMsg = await this.models.ITEM.increment(
            {
                HEART_NUM: -1,
            },
            { where: { IID: params.item_iid } }
        );
        return { wishlistMsg, itemMsg };
    }
};
