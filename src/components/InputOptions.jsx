import React from 'react'
import '../styles/inputOptions.css'

const InputOptions = ({title , Icon , color}) => {
  return (
    <div className='inputOptions'>
        <Icon style={{color:color}}/>
        <h4>{title}</h4>
    </div>
  )
}

export default InputOptions