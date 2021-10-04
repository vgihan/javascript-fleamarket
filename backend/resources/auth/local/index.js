const router = require("express").Router();
const { login, checkLogin, signup } = require("./controller");

router.get("/login", checkLogin);
router.post("/login", login);
router.post("/signup", signup);

module.exports = router;
