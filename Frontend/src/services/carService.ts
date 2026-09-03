import { API } from "./api";
import { CarPayLoad } from "../../../Shared/src/types/payload";

export const fetchCars = async (): Promise<CarPayLoad[]> => {
  const response = await API.get<CarPayLoad[]>("/cars");
  return response.data;
};

export const createCar = async (newCar: CarPayLoad): Promise<CarPayLoad> => {
  const response = await API.post<CarPayLoad>("/cars", newCar);
  return response.data;
};
