const router = require("express").Router();
const {authController} = require("../controllers");
const {checkToken} = require("../middlewares");

router.post("/create-token", authController.createToken);

module.exports = router;