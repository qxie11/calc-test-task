import React, { useState } from 'react';
import { isLastCharOperator } from '../../../utils';

type Props = {
  setDisplayValue: (displayValue: string) => void,
  displayValue: string
}

const Memory: React.FC<Props> = ({ setDisplayValue, displayValue }) => {
  const [memory, setMemory] = useState<string>('0');

  const clear = () => setMemory('0');

  const showOnDisplay = () => {
    try {
      const content = eval(memory.replace(/\s/g, ''));
      setDisplayValue(content.toString());
    } catch {
      setDisplayValue("Что-то пошло не так");
    }
  }

  const minus = () => {
    if (isLastCharOperator(displayValue)) return false;
    setMemory(`${memory}-${displayValue}`);
  }

  const plus = () => {
    if (isLastCharOperator(displayValue)) return false;
    setMemory(`${memory}+${displayValue}`);
  }

  return (<>
    <button className="calc__memory" onClick={clear}>mc</button>
    <button className="calc__memory" onClick={showOnDisplay}>mr</button>
    <button className="calc__memory" onClick={minus}>m-</button>
    <button className="calc__memory calc__memory-last" onClick={plus}>m+</button>
  </>)
}

export default Memory;
