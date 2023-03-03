const router = require("express").Router();
const {testController} = require("../controllers");
const {checkToken} = require("../middlewares");

router.get("/", testController.getTestAllData);
router.get("/:id", testController.getTestSingleData);
router.post("/", checkToken, testController.createTestData);
router.put("/:id", checkToken, testController.updateTestData);
router.delete("/:id", checkToken, testController.deleteTestData);

module.exports = router;