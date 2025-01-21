import { Request, Response } from "express";
import { DataDTO } from "../dto/data.dto";
import { DataService } from "../services/data.service";

const dataService = new DataService();

export class DataController {
  async sendData(req: Request, res: Response): Promise<void> {
    const data: DataDTO = req.body as DataDTO;

    if (!data || !data.sensorValue) {
      res.status(400).send("Datos no recibidos o en formato incorrecto");
      return;
    }

    try {
      await dataService.saveData(data);
      res.status(200).send("Datos recibidos y guardados correctamente");
    } catch (error) {
      res.status(500).send("Error al guardar los datos");
    }
  }
}
