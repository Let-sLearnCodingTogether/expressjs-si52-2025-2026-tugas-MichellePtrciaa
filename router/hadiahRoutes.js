import express from "express";
import * as hadiahController from "../controller/hadiahController.js";

const router = express.Router();

router.get("/hadiah", hadiahController.listHadiah);
router.post("/hadiah", hadiahController.createNewHadiah);
router.put("/hadiah/:id", hadiahController.updateHadiah);
router.delete("/hadiah/:id", hadiahController.deleteHadiah);

export default router;