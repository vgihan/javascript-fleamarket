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
    const user = await userService.getUser({ userId: gitProfile.login })[0];
    console.log(user);
    const setSession = ({ ...arg }) =>
        Object.keys(arg).forEach(
            (property) => (req.session[property] = arg[property])
        );
    const sessionInfo = {
        accessToken,
        isLogined: user ? true : false,
        user: user ? { userId: user.UID, locate: user.LOCATE } : null,
    };
    setSession(sessionInfo);
    if (user) res.redirect("/");
    else res.redirect("/signup-page");
}
module.exports = { githubLogin, githubLoginCallback };
