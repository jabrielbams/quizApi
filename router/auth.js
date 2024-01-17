const authController = require("../controllers/auth");
const router = require("express").Router();

router.post("/auth/signup", authController.signup);

router.post("/auth/signin", authController.signin);

module.exports = router;
