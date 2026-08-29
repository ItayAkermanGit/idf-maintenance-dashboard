import { Router } from "express"; // why not const express = require('express');
import express from "express";
import { authenticateToken } from "../middlewares/auth.middleware";
import { addCar, getCars } from "../contollers/car.controller";
import { verifyManager } from "../middlewares/verifyManager.middlewear";

const ROUTER = express.Router();

ROUTER.get("/", authenticateToken, getCars);
ROUTER.post("/", authenticateToken, verifyManager, addCar);

export default ROUTER;