import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { USE_AUTH } from "../context/authContext";

export const Navbar: React.FC = () => {
  const { user, LOGOUT } = USE_AUTH();

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">cars kshirot system</Typography>

        {user && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Typography variant="body1">
              personnel number: {user.pernr} | gdud: {user.gdud}
            </Typography>
            <Button color="inherit" onClick={LOGOUT} variant="outlined">
              Log Out
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
