const router = require("express").Router();
const {
    githubLogin,
    githubLoginCallback,
    signup,
    checkLogin,
    logout,
} = require("./controller");

router.get("", githubLogin);
router.get("/callback", githubLoginCallback);
router.get("/login", checkLogin);
router.get("/logout", logout);
router.post("/signup", signup);

module.exports = router;
