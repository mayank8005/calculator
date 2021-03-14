import React, { useState, createContext } from "react";
import "./main-container.css";

import { THEME } from "./main-container.constant";

import { ThemeContext } from "./theme.context";

//importing child components
import CalculatorUI from "../calculator-ui/calculator-ui";

export default function MainContainer() {
  const [theme, setTheme] = useState(THEME.LIGHT);

  const themeContextValue = {
    theme,
    toggleTheme: () => {
      theme === THEME.LIGHT ? setTheme(THEME.DARK) : setTheme(THEME.LIGHT)
    }
  }

  return (
    <div className={`main-container ${theme}`}>
      <ThemeContext.Provider value={themeContextValue}>
        <CalculatorUI />
      </ThemeContext.Provider>
    </div>
  );
}
