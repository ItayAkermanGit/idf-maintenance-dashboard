import React, { useState, useEffect } from "react";
import { USE_AUTH } from "../context/authContext";
import { CarTable } from "../components/CarTable";
import { Navbar } from "../components/Navbar";
import { Container, Button, Box, CircularProgress } from "@mui/material";
import { AddCarModel } from "../components/AddCarModel";
import { CarPayLoad } from "../../../Shared/src/types/payload";
import { fetchCars, createCar } from "../services/carService";

export const DashboardPage: React.FC = () => {
  const { user } = USE_AUTH();
  const [cars, setCars] = useState<CarPayLoad[]>([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isManager = user && user.isManager === "0";

  useEffect(() => {
    const loadCars = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
      } catch (err) {
        console.error("Failed to fetch cars:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadCars();
  }, []); // ===== תיקון 1: סגירת ה-useEffect כראוי =====

  // ===== תיקון 2: הוספת async ל-handleAddCar וסגירת הסוגריים =====
  const handleAddCar = async (newCar: CarPayLoad) => {
    try {
      const savedCar = await createCar(newCar);
      setCars((prev) => [...prev, savedCar]);
    } catch (err) {
      console.error("Failed to add car:", err);
    }
  };

  return (
    <>
      <Navbar />
      <Container sx={{ mt: "2rem" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "1rem" }}>
          {isManager && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsModelOpen(true)}
            >
              Add car
            </Button>
          )}
        </Box>

        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
            <CircularProgress />
          </Box>
        ) : (
          <CarTable cars={cars} />
        )}

        {isManager && (
          <AddCarModel
            open={isModelOpen}
            onClose={() => setIsModelOpen(false)}
            onAddCar={handleAddCar}
          />
        )}
      </Container>
    </>
  );
};