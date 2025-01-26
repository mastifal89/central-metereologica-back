import { DataDTO } from "../dto/data.dto";
import DataModel from "../models/data.model";

export class DataService {
  async saveData(data: DataDTO): Promise<void> {
    console.log(data);
    const dataToSave = new DataModel({
      sensorValue: data.sensorValue,
    });
    await dataToSave.save();
    console.log("chanchin!");
  }

  async getData() {
    return DataModel.find();
  }
}
