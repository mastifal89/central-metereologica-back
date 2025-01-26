import { Router } from "express";
import { DataController } from "../controllers/data.controller";

const router = Router();
const dataController = new DataController();

router.post("/receiveDataFromArduino", dataController.receiveDataFromArduino);
router.get("/getData", dataController.getData);

export default router;
