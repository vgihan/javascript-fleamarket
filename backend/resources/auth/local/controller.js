const AuthService = require("../auth_service");
const models = require("../../../models");
const service = new AuthService(models);
const { requestValidation } = require("../../requestValidation");

async function login(req, res) {
    try {
        const result = await service.checkLoginInfo(req.body);
        if (result) {
            req.session.user_id = req.body.user_id;
            res.redirect("/");
        } else {
            res.redirect("/login-page");
        }
    } catch (error) {
        res.status(400).json({ message: 400 });
    }
}
async function signup(req, res) {
    try {
        await service.registUser(req.body);
        res.redirect("/login-page");
    } catch (error) {
        res.redirect("/signup-page");
    }
}

module.exports = { login, signup };
