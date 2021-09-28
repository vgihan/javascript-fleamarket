const uuid = require("uuid");

module.exports = class ChatService {
    constructor(models) {
        this.models = models;
    }
    async registWishlist(params) {
        return await this.models.WISHLIST.create({
            USER_UID: params.user_uid,
            ITEM_IID: params.item_iid,
        });
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
        return await this.models.WISHLIST.destroy({
            where: params,
        });
    }
};
