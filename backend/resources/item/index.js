const express = require("express");
const controller = require("./controller");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "./backend/images" });

router.get("", controller.get);
router.post("", upload.array("img"), controller.post);
router.put("", controller.put);
router.delete("", controller.del);

module.exports = router;
