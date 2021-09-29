const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.get("", controller.get);
router.post("", controller.post);
router.put("", controller.put);
router.delete("", controller.del);

module.exports = router;
