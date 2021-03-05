export const getValueWithOldValue = (oldValue, newValue) => oldValue + newValue;

// This object contain logic for each operator
export const operatorToFunctionObject = {
  "+": (oldValue, newValue) => newValue + oldValue,
  "-": (oldValue, newValue) => newValue - oldValue,
  "*": (oldValue, newValue) => oldValue * newValue,
  "/": (oldValue, newValue) => newValue / oldValue,
  "=": (_, newValue) => newValue,
  "clear": (_, __) => 0,
  "sign": (number) => number * -1,
  "square": (number) => number * number,
  "root": (number) => Math.sqrt(number),
};


// This function will return result using previously selected operator
export const getNewResultWithLastValue = ({ operator, lastNumber, result }) => {
  console.log(operator, lastNumber, result)
  if (!operator) {
    const newResult = Number(lastNumber);
    console.log(newResult, lastNumber);
    return newResult ? newResult : 0;
  }

  if (!lastNumber) {
    return 0;
  }

  const lastNumberValue = Number(lastNumber);

  return operatorToFunctionObject[operator] && lastNumberValue
    ? operatorToFunctionObject[operator](lastNumberValue, result)
    : 0;
};

// This function will return result for special operators
export const getSpecialOperatorResult = (userState, newOperator) => {
  const latestNumber = userState.result ? userState.result : userState.lastNumber;
  return latestNumber && operatorToFunctionObject[newOperator] ?
    operatorToFunctionObject[newOperator](latestNumber) :
    0;
}