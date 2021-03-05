export const getValueWithOldValue = (oldValue, newValue) => oldValue + newValue;

export const operatorToFunctionObject = {
  "+": (oldValue, newValue) => newValue + oldValue,
  "-": (oldValue, newValue) => newValue - oldValue,
  "*": (oldValue, newValue) => oldValue * newValue,
  "/": (oldValue, newValue) => newValue / oldValue,
  "=": (_, newValue) => newValue,
  "clear": (_, __) => 0,
  "sign": (number) => number * -1,
  "square": (number) => number * number,
  "root": () => 0,
};

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

export const getScientificOperatorResult = (userState, newOperator) => {
  const latestNumber = userState.result ? userState.result : userState.lastNumber;
  return latestNumber && operatorToFunctionObject[newOperator] ?
    operatorToFunctionObject[newOperator](latestNumber) :
    0;
}