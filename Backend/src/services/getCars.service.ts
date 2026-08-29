import { CAR_MODEL, CarData } from "../models/car.interfaces";

export async function getAllCars(): Promise<CarData[]> {
  return await CAR_MODEL.find({});
}

export async function getCarByGdud(gdud: string): Promise<CarData[]> {
  return await CAR_MODEL.find({ gdud });
}
