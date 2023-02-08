import { createContext, useContext, useState } from "react";
import { getDataFromLocalStorage } from "../utils/getDataFromLocalStorage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(getDataFromLocalStorage("cart", []));

  return (
    <AppContext.Provider value={{ cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
