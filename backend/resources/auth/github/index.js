const router = require("express").Router();
const { githubLogin, githubLoginCallback } = require("./controller");

router.get("", githubLogin);
router.get("/callback", githubLoginCallback);

module.exports = router;
