import { CAR_MODEL, CarData } from "../models/car.interfaces";

export async function addNewCar(carData: Partial<CarData>): Promise<CarData> {
    const NEW_CAR = new CAR_MODEL(carData);
    return await NEW_CAR.save();
}