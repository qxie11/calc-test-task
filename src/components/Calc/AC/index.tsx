import React from 'react';

type Props = {
  setDisplayValue: (displayValue: string) => void,
}

const AC: React.FC<Props> = ({ setDisplayValue }) => {

  const restart = () => setDisplayValue('0')

  return <button className="calc__ac" onClick={restart}>AC</button>
}

export default AC;
