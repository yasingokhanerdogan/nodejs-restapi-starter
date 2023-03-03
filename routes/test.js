const router = require("express").Router();
const {testController} = require("../controllers");

router.get("/", testController.getTestAllData);
router.get("/:id", testController.getTestSingleData);
router.post("/", testController.createTestData);
router.put("/:id", testController.updateTestData);
router.delete("/:id", testController.deleteTestData);

module.exports = router;