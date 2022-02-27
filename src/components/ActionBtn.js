import React from 'react'

export const ActionBtn = ({color}) => {
  return (
    <div className='arrow' style={{backgroundColor: color}}>
        <i className="fas fa-angle-right" onClick={()=> console.log('hola')}></i>
    </div>
  )
}
