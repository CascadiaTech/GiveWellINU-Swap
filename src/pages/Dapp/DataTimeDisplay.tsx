import React from 'react'

const DateTimeDisplay = (value: any, type: any, isDanger: boolean) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  )
}

export default DateTimeDisplay
