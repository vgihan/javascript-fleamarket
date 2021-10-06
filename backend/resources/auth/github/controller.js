const models = require("../../../models");
const AuthService = require("../auth_service");
const UserService = require("../../user/user_service");
const authService = new AuthService(models);
const userService = new UserService(models);

function githubLogin(req, res) {
    const clientId = process.env.GITHUB_CLIENT_ID;
    const callbackUrl = "http://localhost/auth/github/callback";
    const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${callbackUrl}`;

    res.redirect(url);
}
async function githubLoginCallback(req, res) {
    const codeSearch = new URLSearchParams(req.query);
    const code = codeSearch.get("code");
    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRETS;
    const accessToken = await authService.getAccessToken(
        code,
        clientId,
        clientSecret
    );
    const gitProfile = await authService.getGitProfile(accessToken);
    const user = await userService.getUser({ userId: gitProfile.login });
    const setSession = ({ ...arg }) =>
        Object.keys(arg).forEach(
            (property) => (req.session[property] = arg[property])
        );
    const sessionInfo = {
        accessToken,
        isLogined: user[0] ? true : false,
        user: user[0]
            ? {
                  userId: user[0].dataValues.UID,
                  locate: user[0].dataValues.LOCATE,
              }
            : null,
    };
    setSession(sessionInfo);
    if (user[0]) res.redirect("/");
    else res.redirect("/signup-page");
}
async function signup(req, res) {
    try {
        const { accessToken } = req.session;
        const gitProfile = await authService.getGitProfile(accessToken);
        await userService.postUser({
            uid: gitProfile.login,
            locate: req.body.locate,
            accessToken,
        });
        const setSession = ({ ...arg }) =>
            Object.keys(arg).forEach(
                (property) => (req.session[property] = arg[property])
            );
        setSession({
            accessToken,
            isLogined: true,
            user: { userId: gitProfile.login, locate: req.body.locate },
        });
        res.redirect("/");
    } catch (error) {
        res.status(400).json();
    }
}
function checkLogin(req, res) {
    try {
        const { isLogined, user } = req.session;
        res.json({ isLogined, user });
    } catch (error) {
        res.status(400).json();
    }
}
function logout(req, res) {
    try {
        req.session.destroy();
        res.redirect("/");
    } catch (error) {
        res.status(500).json();
    }
}
module.exports = {
    githubLogin,
    githubLoginCallback,
    signup,
    checkLogin,
    logout,
};
