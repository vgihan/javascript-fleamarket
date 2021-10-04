const router = require("express").Router();
const { get } = require("./controller");

router.get("/user", get);

module.exports = router;
