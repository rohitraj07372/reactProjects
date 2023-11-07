import React from 'react'
 
import LoginForm from '../components/LoginForm'
import SignupForm from './SignupForm.js'
import frameImage from '../assets/frame.png'
import {FcGoogle } from 'react-icons/fc'

function Template({title,desc1, desc2, image, formType, setIsLoggedIn}) {
  return (
    <div className=' flex gap-2 justify-center w-10/12 mx-auto'>
      <div className='leftPart w-[50%] ' >
      <div className='w-[60%] flex flex-col'>
        <h1 className='font-bold text-xl mt-8 mb-2'>{title}</h1>
        <p className='text-xs'><span className='  text-gray-200 '>{desc1}</span><br />
        <span className='  text-blue-700 italic '>{desc2}</span></p>
         {
          formType==='signup'? <SignupForm setIsLoggedIn={setIsLoggedIn} /> :<LoginForm setIsLoggedIn={setIsLoggedIn}/>
         }

         {/* bottom line div */}
         <div className='flex gap-3 items-center justify-center mt-2 mb-2'>
          <div className='w-[50%] h-[2px] bg-slate-800'></div>
          <p className='text-slate-800'>or</p>
          <div className='w-[50%] h-[2px] bg-slate-800'></div>
         </div>

         <button className='w-full bg-slate-800 hover:bg-slate-700 rounded-md text-sm font-semibold py-2 flex justify-center items-center gap-2  '> <FcGoogle className='text-xl'/><p> signup with google</p></button>
      </div>
      </div>
       
    <div className='relative w-11/12 max-w-[450px] mt-8' >
      <img src={frameImage}  alt="pattern" width={558}  height={504} loading='lazy'/>
      <img className='absolute right-4 top-4' src={image}  alt="students" width={558}  height={504} loading='lazy'/>
    </div>

    </div>
  )
}

export default Template
