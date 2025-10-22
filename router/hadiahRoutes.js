import express from "express";
import * as hadiahController from "../controller/hadiahController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/hadiah",protect, hadiahController.listHadiah);
router.post("/hadiah",protect, hadiahController.createNewHadiah);
router.put("/hadiah/:id",protect, hadiahController.updateHadiah);
router.delete("/hadiah/:id",protect, hadiahController.deleteHadiah);

export default router;