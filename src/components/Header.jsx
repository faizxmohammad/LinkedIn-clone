import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Header.css'
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';



const Header = () => {

    const dispatch = useDispatch();

    const logoutOfApp = async () => {
        await auth.signOut();
        dispatch(logout());


    }
  return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-1024.png" alt="" />

                <div className="header__search">
                    {/* Search Icon */}
                    <SearchIcon/>
                    <input type="text" placeholder='Search' />
                </div>

            </div>


            <div className="header__right">
                <HeaderOptions Icon = {HomeIcon} title={"Home"}/>
                <HeaderOptions Icon = {GroupIcon} title={"My Network"}/>
                <HeaderOptions Icon = {WorkOutlinedIcon} title={"Jobs"}/>
                <HeaderOptions Icon = {SmsIcon} title={"Messaging"}/>
                <HeaderOptions Icon = {NotificationsIcon} title={"Notifications"}/>

                <HeaderOptions 
                avatar='https://avatars.githubusercontent.com/u/81904684?v=4' 
                title= 'Me'
                onClick={logoutOfApp} />
                


            </div>

        </div>
   
  )
}

export default Header