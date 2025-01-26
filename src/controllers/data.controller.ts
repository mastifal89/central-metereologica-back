import { Request, Response } from "express";
import { DataDTO } from "../dto/data.dto";
import { DataService } from "../services/data.service";

const dataService = new DataService();

export class DataController {
  async receiveDataFromArduino(req: Request, res: Response): Promise<void> {
    if (!req.body || !req.body.data) {
      res.status(400).send("Datos no recibidos o en formato incorrecto");
      return;
    }

    let data: DataDTO = req.body as DataDTO;

    try {
      data = JSON.parse(req.body.data); // Aquí estamos parseando el JSON que está dentro de 'data'
    } catch (error) {
      res.status(400).send("Error parsing JSON data");
      return;
    }

    try {
      await dataService.saveData(data);
      res.status(200).send("Datos recibidos y guardados correctamente");
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getData(req: Request, res: Response): Promise<void> {
    try {
      const data = await dataService.getData();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send("Error al obtener los datos");
    }
  }
}
