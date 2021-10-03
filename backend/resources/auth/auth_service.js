module.exports = class AuthService {
    constructor(models) {
        this.models = models;
    }
    async checkLoginInfo(params) {
        const { user_id } = params;
        const user = await this.models.USER.findAll({
            where: {
                UID: user_id,
            },
        });
        return user.length <= 0 ? false : true;
    }
    async registUser(params) {
        return await this.models.USER.create({
            UID: params.user_id,
            LOCATE: params.locate,
        });
    }
};
