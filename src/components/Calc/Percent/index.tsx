import React from 'react';
import {
  deleteLastNumber,
  getLastNumber,
  reviveSpaces,
  deleteNotNeededZeros
} from '../../../utils';

type Props = {
  setDisplayValue: (displayValue: string) => void,
  displayValue: string
}

const Percent: React.FC<Props> = ({ setDisplayValue, displayValue }) => {

  const calculatePercent = () => {
    const lastNumber = getLastNumber(displayValue);
    const percent = ~(+lastNumber / 100).toString().indexOf('e') ?
      lastNumber : // if percent too big we do nothing
      deleteNotNeededZeros((+lastNumber / 100).toFixed(5));
    const { valueWithoutLastNumber } = deleteLastNumber(displayValue);
    setDisplayValue(reviveSpaces(`${valueWithoutLastNumber}${percent}`));
  }

  return <button className="calc__percent" onClick={calculatePercent}>%</button>
}

export default Percent;
