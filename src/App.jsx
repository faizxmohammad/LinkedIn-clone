import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Feed from './components/Feed'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Widgets from './components/Widgets'
import { login, logout, selectUser } from './features/userSlice'
import Login from './components/Login'
import { useEffect } from 'react'
import { auth } from './firebase'


function App() {
  const userState = useSelector(selectUser);
  const {user}  = userState;

  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //user is logged in
        dispatch(
          login({
            email :user.email,
            uid:user.uid,
            displayName : user.displayName,
            photoURL:user.photoURL

        })
        )

      }else{
        //user is logged out
        dispatch(logout())

      }
    })
  },[])
  

  return (
    <div className='app'>
      {/* Header */}
        <Header/>

        {/* Check if a user is logged in */}

        {!user ? (
          <Login/> 
        ) :(
            /* Home body */
            <div className="app__body">
              
                {/* Sidebar */}
                  <SideBar/>
                  
                  {/* Feed */}
                  <Feed/>
                  {/* Widgets */}
        
                  <Widgets/>
            </div>
        )}

        

    </div>
  )
}

export default App
