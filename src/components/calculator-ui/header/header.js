import React from 'react';
import './header.css';

//importing constant
import {LABEL, THEMES} from './header.constant'

export default function Header(props) {

    const toggleScientificMode = () => {
        props.setScientificMode(!props.scientificMode);
    }

    const toggleTheme = () => {
        props.setTheme(props.theme === THEMES.dark ? THEMES.light : THEMES.dark)
    }

    return (
        <header>
            <div className="controls scientific-mode-control">
                <span> {LABEL.scientificMode} </span>
                <input type="checkbox" name="scientific-mode" 
                    checked={props.scientificModeEnable} 
                    onChange={toggleScientificMode} />
            </div>

            <div className="controls theme-control">
                <span> {LABEL.darkMode} </span>
                <input type="checkbox" name="dark-mode" 
                    checked={props.theme === THEMES.dark} 
                    onChange={toggleTheme} />
            </div>
        </header>
    );
}