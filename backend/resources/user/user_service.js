module.exports = class ItemService {
    constructor(models) {
        this.models = models;
    }
    async getUser(params) {
        return await this.models.USER.findAll({
            where: {
                UID: params.user_id,
            },
        });
    }
};
