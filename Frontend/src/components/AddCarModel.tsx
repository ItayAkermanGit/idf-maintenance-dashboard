import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { CarPayLoad } from "../../../Shared/src/types/payload";

interface AddCarModelProps {
  open: boolean;
  onClose: () => void;
  onAddCar: (newCar: CarPayLoad) => void; 
}

export const AddCarModel: React.FC<AddCarModelProps> = ({
  open,
  onClose,
  onAddCar,
}) => {
  const [carNumber, setCarNumber] = useState("");
  const [makat, setMakat] = useState("");
  const [kshirot, setKshirot] = useState("1");
  const [gdud, setGdud] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddCar({ carNumber, makat, kshirot, gdud });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Add new car</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <TextField
            label="car number"
            type="number"
            value={carNumber}
            onChange={(e) => setCarNumber(e.target.value)}
            required
          />
          <TextField
            label="makat"
            type="number"
            value={makat}
            onChange={(e) => setMakat(e.target.value)}
            required
          />
          <TextField
            label="gdud"
            type="number"
            value={gdud}
            onChange={(e) => setGdud(e.target.value)}
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={kshirot==='1'}
                onChange={(e) => setKshirot(e.target.checked ? '1': '0')}
              /> // ask if it is good or i need to do text field
            }
            label="kahir"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>abort</Button>
          <Button type="submit" variant="contained">
            add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
