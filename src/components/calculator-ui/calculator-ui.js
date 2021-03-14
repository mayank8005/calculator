import React, { useState } from "react";
import "./calculator-ui.css";

//importing child component
import InputButton from "./input-button/input-button.js";
import Header from "./header/header";

//importing constants
import { BUTTONS, SCIENTIFIC_BUTTONS } from "./calculator-ui.constant";

//importing utility functions
import {
  getValueWithOldValue,
  getNewResultWithLastValue,
  getSpecialOperatorResult,
} from "./calculator-ui.utils";

export default function CalculatorUI(props) {

  const [userInput, setUserInput] = useState({
    operator: "",
    lastNumber: "",
    result: 0,
    showResult: true,
  });

  const [scientificMode, setScientificMode] = useState(false);

  const inputButtonClickHandler = (value, isOperator, scientific) => {
    if (isOperator) {
      // Will be executed only if keys is special operator
      if (scientific) {
        setUserInput({
          ...userInput,
          operator: "",
          lastNumber: getSpecialOperatorResult(userInput, value),
          result: getSpecialOperatorResult(userInput, value),
          showResult: true,
        });
        return;
      }

      // if operator is already selected then overide previously selected operator
      if (!userInput.lastNumber) {
        setUserInput({
          ...userInput,
          operator: value,
        });
      } else {
        setUserInput({
          ...userInput,
          lastNumber: "",
          result: getNewResultWithLastValue(userInput),
          showResult: true,
          operator: value,
        });
      }
    } else {
      // numerical key input
      const newInputState = {
        ...userInput,
        lastNumber: getValueWithOldValue(userInput.lastNumber, value),
        showResult: false,
      };
      setUserInput(newInputState);
    }
  };

  return (
    <div className="calculator-container">
      <Header
        scientificMode={scientificMode}
        setScientificMode={setScientificMode}
      />
      <div className="user-display">
        {" "}
        {userInput.showResult ? userInput.result : userInput.lastNumber}{" "}
      </div>
      <div className="grid button-grid">
        {BUTTONS.map((btn) => (
          <InputButton
            key={btn.value}
            buttonData={btn}
            buttonAction={inputButtonClickHandler}
          />
        ))}
      </div>
      {scientificMode ? (
        <div className="grid scientific-buttons">
          {SCIENTIFIC_BUTTONS.map((btn) => (
            <InputButton
              key={btn.value}
              buttonData={btn}
              buttonAction={inputButtonClickHandler}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
