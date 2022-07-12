import React,{useState} from 'react';
import Cookies from "universal-cookie";
import axios from "axios";
import signinImage from "../assets/signup.jpg"

const initialState={
  fullName:"",
  userName:"",
  phoneNumber:"",
  avatarURL:"",
  password:"",
  confirmPassword:""
}

const Auth = () => {
  const [form,setForm]=useState(initialState)
    const [isSignUp,setIsSignUp]=useState(true);
    const handleChange=e=>{
      setForm({...form,[e.target.name]:e.target.value})
    }
    const switchMode=()=>{
      setIsSignUp(prevState=>!prevState)
    }
    const handleSubmit=e=>{
      e.preventDefault();
      console.log(form);
    }
  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
          <div className="auth__form-container_fields-content">
              <p>{isSignUp? "Sign up":"Sign in"}</p>
              <form onSubmit={handleSubmit}>
                {isSignUp && (
                    <div className="auth__form-container_fields-content_input">
                        <label htmlFor='fullName'> Full name</label>
                        <input name="fullName" type="text" placeholder="Full name" onChange={handleChange} required/>
                    </div>
                )}
                  <div className="auth__form-container_fields-content_input">
                        <label htmlFor='username'> Username</label>
                        <input name="userName" type="text" placeholder="Username" onChange={handleChange} required/>
                    </div>
                    {isSignUp&& (
                      <div className="auth__form-container_fields-content_input">
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <input name="phoneNumber" type="text" onChange={handleChange} placeholder="Phone number" required/>

                      </div>
                    )}

                {isSignUp&& (
                      <div className="auth__form-container_fields-content_input">
                        <label htmlFor='avatarURL'>Avatar URL</label>
                        <input name="avatarURL" type="text" onChange={handleChange} placeholder="Avatar URL" required/>

                      </div>
                    )}        
                <div className="auth__form-container_fields-content_input">
                        <label htmlFor='password'>Password</label>
                        <input name="password" type="password" onChange={handleChange} placeholder="Password" required/>

                      </div>
                      {isSignUp&& (
                      <div className="auth__form-container_fields-content_input">
                        <label htmlFor='confirmPassword'>Confirm password</label>
                        <input name="confirmPassword" type="text" onChange={handleChange} placeholder="Confirm Password" required/>

                      </div>
                    )}  
                    <div className="auth__form-container_fields-content_button">
                        <button>{isSignUp? "Sign Up":"Sign in"}</button>
                    </div>
              </form>
              <div className="auth__form-container_fields-account">
                <p>
                  {isSignUp ? "Already have an account?":"dont have an account?"}
                  <span onClick={switchMode}>{isSignUp? "Sign in":"Sign up"}</span>
                </p>
                
              </div>
          </div>
      </div>
      <div className='auth__form-container_image'>
              <img src={signinImage} alt="sign in"/>
      </div>
    </div>
  )
}

export default Auth;
