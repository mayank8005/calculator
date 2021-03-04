import React from 'react'
import './main-container.css'

//importing child components
import CalculatorUI from "../calculator-ui/calculator-ui";


export default function MainContainer() {

    return(
        <div className="main-container">
            <CalculatorUI/>
        </div>
    )
}