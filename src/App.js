import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { AppProvider } from "./context/AppProvider";
import { NavigationBar } from "./components/NavigationBar";
import { SiteName } from "./components/SiteName";

import "./App.css";

export const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <SiteName />
        <NavigationBar />
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
};
