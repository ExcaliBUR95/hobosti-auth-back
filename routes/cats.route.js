const { Router } = require("express");
const { catsController } = require("../controllers/cats.controller");

const router = Router();

router.post("/cats", catsController.addCats);
router.get("/cats", catsController.getCats);
router.get("/cats/:id", catsController.getCatsOne);

module.exports = router;
