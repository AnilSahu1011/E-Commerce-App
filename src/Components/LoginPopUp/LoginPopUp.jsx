import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

function LoginPopUp({ setShowLogin }) {
  const [currState, setCurrState] = useState("Sign Up")

  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={(e) => e.preventDefault()}>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt='Close'
          />
        </div>
        <div className='login-popup-input'>
        {currState==='Login' ? <></> : <input type='text' placeholder='Your Name' required/>}
            <input type='email' placeholder='Your Email' required/>
            <input type='password' placeholder='Password' required/>
        </div>
        <button>{currState==='Sign Up' ? 'Create account' : 'Login'}</button>
        <div className='login-popup-condition'>
            <input type='checkbox' required/>
            <p>By continuing, i agree to the term of use & privacy policy.</p>
        </div>
        {currState==='Login'
            ?<p>Create a new account ?<span onClick={()=>setCurrState('Sign Up')}> Click here</span></p>
            :<p>Already have an account?<span onClick={()=>setCurrState('Login')}> Login</span></p>
            }
      </form>
    </div>
  )
}

export default LoginPopUp
