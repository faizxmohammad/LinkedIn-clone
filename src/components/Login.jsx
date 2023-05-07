import React, { useState } from 'react'
import '../styles/Login.css'
import { auth } from '../firebase'
import { useDispatch } from "react-redux";
import { login } from '../features/userSlice.js'


const Login = () => {
    const [email , setEmail] = useState('');
    const [name , setName] = useState('');
    const [password , setPassword] = useState('');
    const [profilePic , setProfilePic] = useState('');
    const dispatch = useDispatch();

    // Login 
    const loginUser = async (e) =>{
        e.preventDefault();
        try {
          const userAuth = await auth.signInWithEmailAndPassword(email, password);
    
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoUrl: userAuth.user.photoURL,
            })
          );
        } catch (error) {
          alert(error);
        }


    }
    // Register : 
    const register = async  () =>{
        if(!name){
            return alert('Please Enter a full name!')
        }
        try{
            const userAuth = await auth.createUserWithEmailAndPassword(
            email,password);
            await userAuth.user.updateProfile({
                displayName: name,
                photoUrl: profilePic,
              });
              dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoUrl: profilePic,
                })
              );
            } catch (error) {
              console.log(error);
              alert(error);
            }
    }



  return (
    <div className='login'>
        <img src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png" alt="linkedin-logo" />

        {/* Login Form */}
        <form>
            {/* Full Name */}
                <input type="text" 
                placeholder='Fullname (Required if Registering)'
                value={name} 
                onChange={(e) => setName(e.target.value)} />

            {/* Profile Pic */}
                <input type="text" 
                placeholder='Profile picture url (optional)' 
                value={profilePic} 
                onChange={e => setProfilePic(e.target.value )}/>

            {/* Email */}
                <input type="Email"  
                placeholder='Email'
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>

            {/* Password */}
                <input type="password"  
                placeholder='Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>

            {/* Submit Button */}
                <button type='submit' onClick={loginUser}>Sign In</button>

        </form>

        {/* Register */}
        <p>Not a member? {" "}
            <span className='login__register' onClick={register}>           Register now
            </span>
        </p>


    </div>
    
  )
}

export default Login