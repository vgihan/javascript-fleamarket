const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.get("", controller.get);
router.post("", controller.post);
router.delete("", controller.del);

module.exports = router;
