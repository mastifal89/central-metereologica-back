"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataController = void 0;
const data_service_1 = require("../services/data.service");
const dataService = new data_service_1.DataService();
class DataController {
    sendData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            if (!data || !data.sensorValue) {
                res.status(400).send("Datos no recibidos o en formato incorrecto");
                return;
            }
            try {
                yield dataService.saveData(data);
                res.status(200).send("Datos recibidos y guardados correctamente");
            }
            catch (error) {
                res.status(500).send("Error al guardar los datos");
            }
        });
    }
}
exports.DataController = DataController;
