import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidateData } from '../../utils/validate';
function LogIn() {
   
   const [isSignInForm,setSignInForm] = useState(true);
   const [errorMessage , setErrorMessage] = useState(null);

   const email = useRef(null);
   const password = useRef(null);


  const toggleSignInForm = ()=>{
    setSignInForm(!isSignInForm);
  };

  const handlebuttonClick = ()=>{
    //Validate the form data

    //console.log(email.current.value);
    const message = checkValidateData(email.current.value,password.current.value);
    // console.log(message); 
    setErrorMessage(message);       
  }

  return (
    <div >
    <Header></Header>
    <div className='absolute'>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/fc54c3ab-a70d-4138-acb5-dfd970612faf/CA-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="app logo"></img>
    </div>
    <form onSubmit={(e)=>e.preventDefault()}className='w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
     <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
     { !isSignInForm && (<input type="text" placeholder='Full Name' className='p-2 my-4 w-full bg-gray-500'></input>)
        
      }
    <input type="text" ref={email} placeholder='Email address' className='p-2 my-4 w-full bg-gray-500'></input>
      
      <input type="password" ref={password} placeholder='Password' className='p-2 my-4 w-full bg-gray-500'></input>
      <p className='text-red-500 font-bold text-lg '>{errorMessage}</p>
      <button className='p-4 my-6 bg-red-700 w-full' onClick={handlebuttonClick}>{isSignInForm ? "Sign In" : "Sign Up"} </button>

      <p className='py-4' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up" : "Already registered? Sign In Now"}</p>
    </form>
    </div>
  )
}

export default LogIn;