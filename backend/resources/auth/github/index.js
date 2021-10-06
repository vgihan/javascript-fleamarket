const router = require("express").Router();
const { githubLogin, githubLoginCallback, signup } = require("./controller");

router.get("", githubLogin);
router.get("/callback", githubLoginCallback);
router.get("/signup", signup);

module.exports = router;
