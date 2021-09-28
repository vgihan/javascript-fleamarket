module.exports = class UserService {
    constructor(models) {
        this.models = models;
    }
    async registUser(params) {
        return await this.models.USER.create({
            UID: params.uid,
            USERNAME: params.username,
        });
    }
};
