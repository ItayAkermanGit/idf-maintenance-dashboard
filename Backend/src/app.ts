import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { login } from "./contollers/auth.controller";
import carRouter from "./routes/car.routes";
import mongoSanitize from "express-mongo-sanitize";

const APP = express();
APP.use(express.json());
APP.use(mongoSanitize());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/army_db";

APP.post("/login", login);
APP.use("api/cars", carRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    APP.listen(PORT, () => {
      console.log(`Server is runnig on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to mongoDB:", error);
  });
