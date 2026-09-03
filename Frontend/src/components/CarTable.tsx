import React from "react";
import { CarPayLoad } from "../../../Shared/src/types/payload";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface CarTableProps {
  cars: CarPayLoad[];
}

export const CarTable: React.FC<CarTableProps> = ({ cars }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: "1.5" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>carnumber</TableCell>
            <TableCell>makat</TableCell>
            <TableCell>kshirot</TableCell>
            <TableCell>gdud</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.map((car) => (
            <TableRow key={car.carNumber}>
              <TableCell>{car.carNumber}</TableCell>
              <TableCell>{car.makat}</TableCell>
              <TableCell>{car.kshirot ? "0" : "1"}</TableCell>
              <TableCell>{car.gdud}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
