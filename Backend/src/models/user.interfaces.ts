import mongoose, { Schema, Document } from "mongoose";

export interface UserData extends Document {
  pernr: string;
  gdud: string;
  isManager: string;
}

const userSchema: Schema = new Schema(
  {
    pernr: { type: String, required: true, unique: true },
    gdud: { type: String, required: true },
    isManager: { type: String, required: true },
  },
  { collection: "users" },
);

export const USER_MODEL = mongoose.model<UserData>("User", userSchema);
