import React from 'react';
import './header.css';

//importing constant
import {LABEL} from './header.constant'

export default function Header(props) {

    const toggleScientificMode = () => {
        props.setScientificMode(!props.scientificMode);
    }

    return (
        <header>
            <div className="scientific-mode-control">
                <span> {LABEL.scientificMode} </span>
                <input type="checkbox" name="scientific-mode" 
                    checked={props.scientificModeEnable} 
                    onChange={toggleScientificMode} />
                </div>
        </header>
    );
}