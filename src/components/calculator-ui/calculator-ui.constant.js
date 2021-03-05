// normal button config (non-scientific buttons)
// NOTE: arragment/sequence of button will be as per index of this array
export const BUTTONS = [
    {label: '1', value: '1', operator: false},
    {label: '2', value: '2', operator: false},
    {label: '3', value: '3', operator: false},
    {label: 'Add (+)', value: '+', operator: true},
    {label: '4', value: '4', operator: false},
    {label: '5', value: '5', operator: false},
    {label: '6', value: '6', operator: false},
    {label: 'Substract (-)', value: '-', operator: true},
    {label: '7', value: '7', operator: false},
    {label: '8', value: '8', operator: false},
    {label: '9', value: '9', operator: false},
    {label: 'Multiply (*)', value: '*', operator: true},
    {label: 'Clear', value: 'clear', operator: true},
    {label: '0', value: '0', operator: false},
    {label: '=', value: '=', operator: true},
    {label: 'Divide (/)', value: '/', operator: true},
];

// scientific calculator buttons
export const SCIENTIFIC_BUTTONS = [
    {label: 'Sign button', value: 'sign', operator: true, scientific: true},
    {label: 'Square', value: 'square', operator: true, scientific: true},
    {label: 'Square root', value: 'root', operator: true, scientific: true},
];