import React, {useState} from 'react';
import './calculator-ui.css';

//importing child component
import InputButton from './input-button/input-button.js';

//importing constants
import { BUTTONS } from "./calculator-ui.constant";

export default function CalculatorUI() {

    const [userInput, setUserInput] = useState({
        operator: '',
        lastNumber: '',
        result: 0, 
    });

    const [buttons, setButtons] = useState(BUTTONS);

    const inputButtonClickHandler = (value, isOperator) => {
        if(isOperator) {}
        else {
            const newInputState = {...userInput, lastNumber: value, result: value };
            setUserInput(newInputState);
        }
    }

    return(
        <div className="calculator-container">
            <div className="user-display"> {userInput.result} </div>
            <div className="button-grid">
                {buttons.map( btn => (
                    <InputButton key={btn.value} buttonData={btn} buttonAction={inputButtonClickHandler}/>
                ))}
            </div>
        </div>
    )
}