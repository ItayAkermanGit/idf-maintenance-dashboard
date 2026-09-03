import React from "react";
import { AUTH_PROVIDER, USE_AUTH } from "./context/authContext";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";

const MAIN_CONTENT: React.FC = () => {
  const { user, token } = USE_AUTH();

  if (!token || !user) {
    return <LoginPage />;
  }

  return <DashboardPage />;
};

export default function App() {
  return (
    <AUTH_PROVIDER>
      <MAIN_CONTENT />
    </AUTH_PROVIDER>
  );
}
