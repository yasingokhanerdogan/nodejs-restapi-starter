const router = require("express").Router();
const {testController} = require("../controllers");

router.get("/", testController.getTestData);

module.exports = router;