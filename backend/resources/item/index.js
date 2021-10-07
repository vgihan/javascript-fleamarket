const express = require("express");
const controller = require("./controller");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "backend/uploads/" });

router.get("", controller.get);
router.post("", upload.single("imgs"), controller.post);
router.put("", controller.put);
router.delete("", controller.del);

module.exports = router;
