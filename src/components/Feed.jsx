import React, { useEffect, useState } from 'react'
import '../styles/Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import InputOptions from './InputOptions';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Posts from './Posts';
import {db} from '../firebase'
import firebase from 'firebase/compat/app';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move'
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

const Feed = () => {
    const userState = useSelector(selectUser)
    const {user} = userState
    const [posts , setPosts] = useState([]);
    const [input , setInput] = useState('');

    useEffect(()=>{
        db.collection('posts')
        .orderBy('timestamp' , 'desc')
        .onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data : doc.data()
                }
            )))
        ))
        
    },[])
    
    const sendPost= (e) =>{
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description : user.email,
            message : input,
            photoURL : user.photoURL || '',
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    }

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon/>
                <form>
                    <input type="text" placeholder='Start a post'  value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <button type='submit' onClick={sendPost}>send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOptions title = 'Photo' Icon= {PhotoSizeSelectActualIcon} color = '#70B5f9'/>


                <InputOptions title = 'Video' Icon= {SmartDisplayIcon} color = '#5F9B41'/>


                <InputOptions title = 'Job' Icon= {BusinessCenterIcon} color = '#A872E8'/>


                <InputOptions title = 'Write Article' Icon= {NewspaperRoundedIcon} color = '#E16745'/>
            </div>
        </div>

        {/* Posts */}
        <FlipMove>
            {posts.map(({id,data :{name , description , message , photoUrl , timestamp}})=>(
                <Posts
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl = {photoUrl}
                timestamp = {timestamp}
                />
            ))}
        </FlipMove>

        {/* <Posts name = "Faiz Mohammed" description='this is a test' message = 'Wow this worked'  /> */}

    </div>
  )
}

export default Feed