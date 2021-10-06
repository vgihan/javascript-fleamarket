module.exports = class ItemService {
    constructor(models) {
        this.models = models;
    }
    async getUser(params) {
        return await this.models.USER.findAll({
            where: {
                UID: params.userId,
            },
        });
    }
    async postUser(params) {
        const { uid, locate, accessToken } = params;
        return await this.models.USER.create({
            UID: uid,
            LOCATE: locate,
            ACCESS_TOKEN: accessToken,
        });
    }
};
