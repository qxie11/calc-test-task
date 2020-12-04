import React from 'react';
import { isLastCharOperator, getLastNumber } from '../../../utils';

type Props = {
  setDisplayValue: (displayValue: string) => void,
  displayValue: string
}

const Float: React.FC<Props> = ({ setDisplayValue, displayValue }) => {

  const setFloat = () => {
    if (isLastCharOperator(displayValue)
      || getLastNumber(displayValue).includes('.')) return false;

    setDisplayValue(displayValue + '.');
  }

  return <button className="calc__float" onClick={setFloat}>,</button>
}

export default Float;
