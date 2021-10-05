const router = require("express").Router();
const { get } = require("./controller");

router.get("", get);

module.exports = router;
