import React, { useState, SyntheticEvent } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { API } from "../services/api";
import { USE_AUTH } from "../context/authContext";

export const LoginPage: React.FC = () => {
  const [pernr, setPernr] = useState("");
  const [error, setError] = useState("");
  const { LOGIN } = USE_AUTH();
  const HANDEL_SUBMIT = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const RESPONSE = await API.post("/login", { pernr });

      const { token, user } = RESPONSE.data;

      LOGIN(token, user);
    } catch (err) {
      setError("Could not connect - Wrong credentials");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography component="h1" variant="h5">
          Kshirot cars - login
        </Typography>

        {error && <Alert severity="error">{error}</Alert>}

        <Box
          component="form"
          onSubmit={HANDEL_SUBMIT}
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            margin="normal"
            type="number"
            required
            fullWidth
            label="personnel number"
            value={pernr}
            onChange={(e) => setPernr(e.target.value)}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            connect
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
