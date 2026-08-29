import { getCarByGdud, getAllCars } from "../services/getCars.service";
import { addNewCar } from "../services/addCar.service";
import { Request, Response } from "express";

export async function getCars(req: Request, res: Response) {
  try {
    const { isManager, gdud } = req.user;
    let cars;

    if (isManager === "0") 
        cars = await getAllCars();
    else {
        cars = await getCarByGdud(gdud);
    }

    res.status(200).json(cars);
  } catch (err) {
    res.status(401).json({ message: "Failed to get cars." });
  }
}

export async function addCar(req: Request, res: Response): Promise<void> {
    try {
        const NEW_CAR = await addNewCar(req.body);
        res.status(201).json(NEW_CAR); 
    } catch (err) {
        res.status(500).json({ message: "Error adding car"});
    }
}
