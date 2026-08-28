import mongoose, { Schema, Document } from "mongoose";

export interface UserData extends Document {
  pernr: string;
  gdud: number;
  isManager: number;
}

const userSchema: Schema = new Schema(
  {
    pernr: { type: String, required: true, unique: true },
    gdud: { type: Number, required: true },
    isManager: { type: Number, required: true },
  },
  { collection: "users" },
);

export const USER_MODEL = mongoose.model<UserData>("User", userSchema);
