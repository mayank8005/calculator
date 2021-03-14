import React, {useContext} from "react";
import "./header.css";

//importing themeContext
import { ThemeContext } from "../../main-container/theme.context";

//importing constant
import { LABEL } from "./header.constant";
import { THEME } from '../../main-container/main-container.constant';

export default function Header(props) {

  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleScientificMode = () => {
    props.setScientificMode(!props.scientificMode);
  };


  return (
    <header>
      <div className="controls scientific-mode-control">
        <span> {LABEL.scientificMode} </span>
        <input
          type="checkbox"
          name="scientific-mode"
          checked={props.scientificModeEnable}
          onChange={toggleScientificMode}
        />
      </div>

      <div className="controls theme-control">
        <span> {LABEL.darkMode} </span>
        <input
          type="checkbox"
          name="dark-mode"
          checked={theme === THEME.DARK}
          onChange={toggleTheme}
        />
      </div>
    </header>
  );
}
