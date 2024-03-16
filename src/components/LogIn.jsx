import React from 'react'
import Header from './Header';
function LogIn() {
  return (
    <div >
    <Header></Header>
    <div className='absolute'>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/fc54c3ab-a70d-4138-acb5-dfd970612faf/CA-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="app logo"></img>
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
     <h1 className='font-bold text-3xl py-4'>Sign In</h1>
      <input type="text" placeholder='Email address' className='p-2 my-4 w-full bg-gray-500'></input>
      <input type="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-500'></input>
      <button className='p-4 my-6 bg-red-700 w-full'>Sign In</button>
    </form>
    </div>
  )
}

export default LogIn;