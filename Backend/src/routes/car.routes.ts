import express from "express";
import { authenticateToken } from "../middlewares/auth.middleware";
import { addCar, getCars } from "../controllers/car.controller";
import { verifyManager } from "../middlewares/verifyManager.middlewear";

const ROUTER = express.Router();

ROUTER.get("/", authenticateToken, getCars);
ROUTER.post("/add", authenticateToken, verifyManager, addCar);

export default ROUTER;
