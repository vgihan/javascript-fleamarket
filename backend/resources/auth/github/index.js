const router = require("express").Router();
const {
    githubLogin,
    githubLoginCallback,
    signup,
    checkLogin,
} = require("./controller");

router.get("", githubLogin);
router.get("/callback", githubLoginCallback);
router.post("/signup", signup);
router.get("/login", checkLogin);

module.exports = router;
