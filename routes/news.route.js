const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

const router = Router();

router.post("/news", newsController.addNews);
router.get("/news", newsController.getNews);
router.delete("/news/:id", newsController.deleteNews);
router.patch("/news/:id", newsController.patchNews);
router.get("/news/:id", newsController.getNewsInCats);
router.get("/news/one/:id", newsController.getNewsOne);

module.exports = router;
