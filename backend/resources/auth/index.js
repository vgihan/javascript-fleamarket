const router = require("express").Router();
const githubRouter = require("./github/index");
const localRouter = require("./local/index");

router.use("/github", githubRouter);
router.use("/local", localRouter);

module.exports = router;
