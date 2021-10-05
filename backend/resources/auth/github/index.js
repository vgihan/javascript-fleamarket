const router = require("express").Router();
const passport = require("passport");
const GithubStrategy = require("passport-github");
const models = require("../../../models");

passport.use(
    new GithubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRETS,
            callbackURL: "http://localhost/auth/github/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            const { username } = profile;
            try {
                const user = await models.USER.findAll({
                    where: {
                        UID: username,
                    },
                });
                console.log(user);
                if (user.length <= 0) throw new Error();
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);
router.get("", passport.authenticate("github"));
router.get(
    "/callback",
    passport.authenticate("github", {
        successRedirect: "/",
        failureRedirect: "/login-page",
    }),
    (req, res) => res.redirect("/")
);

module.exports = router;
