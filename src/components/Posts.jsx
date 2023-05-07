import React ,{ forwardRef }from 'react'
import '../styles/Posts.css'
import { Avatar } from '@mui/material'
import InputOptions from './InputOptions'; 
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';

import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Posts = forwardRef(({name, description , message , photoUrl , timestamp} , ref) => {

  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}/>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        
        <div className="post__body">
            <p>{message}</p>
            <p>{}</p>
        </div>
        <div className="post__buttons">
          <InputOptions title='Like' color='gray' Icon={ThumbUpOutlinedIcon}/>
          <InputOptions title='Comment' color='gray' Icon={CommentOutlinedIcon}/>
          <InputOptions title='Repost' color='gray' Icon={AutorenewRoundedIcon}/>

          <InputOptions title='Send' color='gray' Icon={SendIcon}/>

      


        </div>

    </div>
  )
})

export default Posts