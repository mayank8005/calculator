import React, { useState } from "react";
import "./main-container.css";

//importing child components
import CalculatorUI from "../calculator-ui/calculator-ui";

export default function MainContainer() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`main-container ${theme}`}>
      <CalculatorUI setTheme={setTheme} theme={theme} />
    </div>
  );
}
