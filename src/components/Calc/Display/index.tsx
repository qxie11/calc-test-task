import React from 'react'

type Props = {
  displayValue: string
}

const Display: React.FC<Props> = ({ displayValue }) => {
  return (
    <input
      readOnly
      className="calc__display"
      type="text"
      value={displayValue}
    />
  )
}

export default Display
