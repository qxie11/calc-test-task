import React from 'react';
import { isLastCharOperator, isError, getLastNumber } from './../../../utils';

type Props = {
  setDisplayValue: (displayValue: string) => void,
  displayValue: string
}

const Operators: React.FC<Props> = ({ setDisplayValue, displayValue }) => {
  const operatorsChars = ['+', '-', '/', '*'];

  const setDisplayValueByOperator = (e: React.MouseEvent<HTMLButtonElement>) => {
    const operatorElement = e.target as HTMLButtonElement;
    const valueOfButton = operatorElement.dataset.operation;
    const lastNumber = getLastNumber(displayValue);

    if (isError(displayValue)) {
      return;
    }

    if (lastNumber[lastNumber.length - 1] === '.') {
      displayValue = displayValue.substring(0, displayValue.length - 1);
    }

    if (isLastCharOperator(displayValue)) {
      setDisplayValue(displayValue.slice(0, -3) + ` ${valueOfButton} `);
    } else {
      setDisplayValue(displayValue + ` ${valueOfButton} `);
    }
  }

  return (
    <>
      { operatorsChars.map(operator => {
        return <button onClick={setDisplayValueByOperator}
          key={operator}
          data-operation={operator}
          className="calc__operator"
        >{operator}</button>
      })}
    </>
  )
}

export default Operators
