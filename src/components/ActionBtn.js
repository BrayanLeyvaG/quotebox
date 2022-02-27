import React from 'react'

export const ActionBtn = ({color, btnClick}) => {
  return (
    <div className='arrow' style={{backgroundColor: color}} onClick={btnClick}>
        <i className="fas fa-angle-right" ></i>
    </div>
  )
}
