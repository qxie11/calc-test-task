import React from 'react';
import { reviveSpaces, deleteNotNeededZeros } from './../../../utils';

type Props = {
  setDisplayValue: (displayValue: string) => void,
  displayValue: string
}

const Calculate: React.FC<Props> = ({ setDisplayValue, displayValue }) => {

  const calculateResult = () => {
    try {
      const evaledString = eval(displayValue);
      const result = isFinite(evaledString) ?
        deleteNotNeededZeros(reviveSpaces(evaledString.toFixed(5))) :
        "На ноль делить нельзя!";
      setDisplayValue(result);
    } catch {
      setDisplayValue("Что-то пошло не так");
    }
  }

  return <button className="calc__equal" onClick={calculateResult}>=</button>

}

export default Calculate; 
