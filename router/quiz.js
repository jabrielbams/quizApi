const quizController = require("../controllers/quiz");
const router = require("express").Router();

const { verifyToken } = require("../middleware/authJwt");

router.post("/", [verifyToken], quizController.create);

router.get("/", quizController.getAll);
router.get("/:id", quizController.findOne);
router.get("/category/:id", quizController.getByCategoryId);
router.get("/level/:id", quizController.getByLevelId);

router.put("/:id", [verifyToken], quizController.update);
router.delete("/:id", [verifyToken], quizController.delete);

module.exports = router;
