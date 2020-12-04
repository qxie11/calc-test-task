import React from 'react';
import { getLastNumber, isError } from './../../../utils';

type Props = {
  setDisplayValue: (displayValue: string) => void,
  displayValue: string
}

const Numbers: React.FC<Props> = ({ setDisplayValue, displayValue }) => {

  const setDisplayValueByNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
    const numElement = e.target as HTMLDivElement;
    const valueOfButton = numElement.dataset.num;
    const lastNum = getLastNumber(displayValue);

    if (!isError(displayValue)) {
      if (lastNum.trim() === "0") {
        setDisplayValue(`${displayValue.substring(0, displayValue.length - 2)} ${valueOfButton}`);
      } else {
        setDisplayValue(displayValue + valueOfButton);
      }
    } else {
      setDisplayValue(` ${valueOfButton}`);
    }
  };

  return (
    <>
      {
        Array(9).fill(0).map((_, index) => {
          index = 9 - index;
          return <button onClick={setDisplayValueByNumber}
            key={index}
            data-num={index}
            className="calc__num"
          >{index}</button>
        })
      }

      <button
        onClick={setDisplayValueByNumber}
        data-num="0"
        className="calc__num">0</button>
    </>
  )
}

export default Numbers
