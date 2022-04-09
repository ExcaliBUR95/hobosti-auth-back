const { Router } = require("express");
const { usersController } = require("../controllers/user.controller");

const router = Router();

router.post("/users", usersController.registerUsers);
router.post("/login", usersController.login);
router.get("/users", usersController.getAllUsers);

module.exports = router;
