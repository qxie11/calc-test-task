import React, { useState } from 'react';
import Display from './Display';
import AC from './AC';
import ChangeNumberSign from './ChangeNumberSign';
import Percent from './Percent';
import Memory from './Memory';
import Numbers from './Numbers';
import Operators from './Operators';
import Calculate from './Calculate/';
import Float from './Float/';

const Calc: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');

  return (
    <div className="calc">
      <Display displayValue={displayValue} />
      <AC setDisplayValue={setDisplayValue} />
      <ChangeNumberSign displayValue={displayValue} setDisplayValue={setDisplayValue} />
      <Percent displayValue={displayValue} setDisplayValue={setDisplayValue} />
      <Memory displayValue={displayValue} setDisplayValue={setDisplayValue} />
      <Operators setDisplayValue={setDisplayValue} displayValue={displayValue} />
      <Numbers setDisplayValue={setDisplayValue} displayValue={displayValue} />
      <Calculate setDisplayValue={setDisplayValue} displayValue={displayValue} />
      <Float setDisplayValue={setDisplayValue} displayValue={displayValue} />
    </div>
  )
}

export default Calc;
