import { createContext, useContext, useState } from "react";

export const MenuContext = createContext();

//Custom hook
export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useTimeLocation must be used within TimeLocationProvider");
  }
  return context;
};

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const value = {
    isMenuOpen,
    MenuToggle,
  };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
