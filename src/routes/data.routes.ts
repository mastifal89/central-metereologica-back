import { Router } from "express";
import { DataController } from "../controllers/data.controller";

const router = Router();
const dataController = new DataController();

router.post("/sendData", dataController.sendData);

export default router;
