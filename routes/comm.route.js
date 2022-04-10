const { Router } = require("express");
const { commController } = require("../controllers/comm.controller");
const authMeddleware = require("../models/middlewares/auth.meddleware");

const router = Router();

router.post("/comm", authMeddleware, commController.addCom);
router.delete("/comm/:id", commController.deleteComm);
router.get("/comm", commController.getAllComm);
router.patch("/comm/:id", commController.patchComm);

module.exports = router;
