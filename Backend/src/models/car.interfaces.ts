import mongoose, { Schema, Document } from "mongoose";

export interface CarData extends Document {
  carNumber: string;
  makat: string;
  kshirot: string;
  gdud: string;
}

const carSchema: Schema = new Schema(
  {
    carNumber: { type: String, required: true, unique: true },
    makat: { type: String, required: true },
    kshirot: { type: String, required: true, default: 1 },
    gdud: { type: String, required: true },
  },
  { collection: "carDatas" },
);

export const CAR_MODEL = mongoose.model<CarData>("Car", carSchema);
