"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_controller_1 = require("../controllers/data.controller");
const router = (0, express_1.Router)();
const dataController = new data_controller_1.DataController();
router.post("/sendData", dataController.sendData);
exports.default = router;
