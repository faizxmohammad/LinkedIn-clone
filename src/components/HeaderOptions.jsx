import React from 'react'
import '../styles/HeaderOptions.css'
import { Avatar } from '@mui/material'

const HeaderOptions = ({avatar , Icon , title , onClick}) => {
  
  return (
    <div className='headerOption' onClick={onClick}>
        {  Icon && <Icon className = 'headerOption__icon'/>  }
        {avatar && (
          <Avatar className="headerOption__icon" src = {avatar}></Avatar>
        )} 
        <h3 className='headerOption__title'>{title}</h3>


    </div>
  )
}

export default HeaderOptions