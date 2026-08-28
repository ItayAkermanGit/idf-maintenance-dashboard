import mongoose, { Schema, Document } from "mongoose";

export interface CarData extends Document {
  carNumber: string;
  makat: number;
  kshirot: number;
  gdud: number;
}

const carSchema: Schema = new Schema(
  {
    carNumber: { type: String, required: true, unique: true },
    makat: { type: Number, required: true },
    kshirot: { type: Number, required: true, default: 1 },
    gdud: { type: Number, required: true },
  },
  { collection: "carDatas" },
);

export const CAR_MODEL = mongoose.model<CarData>("Car", carSchema);
