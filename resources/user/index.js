const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.post("/", controller.post);
router.get("/", controller.get);

module.exports = router;
