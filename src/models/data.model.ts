import mongoose, { Schema, Document } from 'mongoose';

export interface IData extends Document {
  sensorValue: number;
  timestamp: Date;
}

const DataSchema: Schema = new Schema({
  sensorValue: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model<IData>('Data', DataSchema);