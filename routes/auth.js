const router = require("express").Router();
const {authController} = require("../controllers");

router.post("/", authController.createToken);

module.exports = router;