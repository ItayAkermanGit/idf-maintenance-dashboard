import React from "react";
import { AUTH_PROVIDER, USE_AUTH } from "./context/authContext";
import { LoginPage } from "./pages/LoginPage";
import { Button, Container, Typography, Box } from "@mui/material";

const MAIN_CONTENT: React.FC = () => {
  const { user, token, LOGOUT } = USE_AUTH();

  if (!token || !user) {
    return <LoginPage />;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 8, textAlign: "center" }}>
      <Box sx={{ p: 4, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          connected succssefully!
        </Typography>
        <Typography variant="body1">pernr: {user.pernr}</Typography>
        <Button
          variant="outlined"
          color="error"
          onClick={LOGOUT}
          sx={{ mt: 2 }}
        >
          Log Out
        </Button>
      </Box>
    </Container>
  );
};

export default function App() {
  return (
    <AUTH_PROVIDER>
      <MAIN_CONTENT />
    </AUTH_PROVIDER>
  );
}
