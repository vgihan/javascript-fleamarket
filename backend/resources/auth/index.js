const router = require("express").Router();
const githubRouter = require("./github/index");

router.use("/github", githubRouter);

module.exports = router;
