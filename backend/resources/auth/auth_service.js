const axios = require("axios");

module.exports = class AuthService {
    constructor(models) {
        this.models = models;
    }
    async checkLoginInfo(params) {
        const { userId } = params;
        const user = await this.models.USER.findAll({
            where: {
                UID: userId,
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
    async getAccessToken(code, clientId, clientSecret) {
        const tokenUrl = `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`;
        const { data } = await axios.post(tokenUrl, { code });
        const tokenSearch = new URLSearchParams(data);
        return tokenSearch.get("access_token");
    }
    async getGitProfile(accessToken) {
        const userProfileUrl = "https://api.github.com/user";
        const { data } = await axios.get(userProfileUrl, {
            headers: {
                Authorization: `token ${accessToken}`,
            },
        });
        return data;
    }
};
