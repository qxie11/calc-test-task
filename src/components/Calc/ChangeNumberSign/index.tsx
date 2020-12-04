import React from 'react';
import { isLastCharOperator, isNumberPositive, getLastNumber, deleteLastNumber } from '../../../utils';

type Props = {
  setDisplayValue: (displayValue: string) => void,
  displayValue: string
}

const ChangeNumberSign: React.FC<Props> = ({ setDisplayValue, displayValue }) => {

  const toggleNumberSign = () => {
    if (isLastCharOperator(displayValue) || getLastNumber(displayValue) === '0') return false;

    const { valueWithoutLastNumber, deleted } = deleteLastNumber(displayValue);

    if (isNumberPositive(displayValue)) {
      setDisplayValue(`${valueWithoutLastNumber.join('')} - ${deleted}`);
    } else {
      valueWithoutLastNumber.pop();
      setDisplayValue(`${valueWithoutLastNumber.join('')}${deleted}`);
    }
  }

  return <button className="calc__plus-minus" onClick={toggleNumberSign}>+/-</button>
}

export default ChangeNumberSign;
