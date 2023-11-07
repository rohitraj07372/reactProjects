import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';


function LoginForm({setIsLoggedIn}) {
  const navigate = useNavigate();
const [formData, setFormData] = useState({email:"", password:""});
function changeHandler(event) {

    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(event)
  {
       event.preventDefault();
       setIsLoggedIn(true);
       toast.success("Logged In");
       navigate('/dashboard')
  }
  
const [showPassword, setShowPassword] = useState("password");
  return (
    <div className='mt-3 w-full flex flex-col'>
      <form action="" onSubmit={submitHandler}>
 
        <label >
            <p className='text-sm font-semibold'>Email Address <sup className='text-red-600'>*</sup></p>
       
        <input className='w-full rounded-md bg-slate-800 px-2 py-1 active:border-b-3 active:border-slate-600 focus:outline-none ' type="email" name='email' required value={formData.email} onChange={changeHandler}  placeholder='Enter email id'/>
        </label>


        <label className='relative'>
            <p className='text-sm font-semibold '>Password <sup className='text-red-600'>*</sup></p>
       
        <input className='w-full rounded-md bg-slate-800 px-2 py-1 active:border-b-3 active:border-slate-600 focus:outline-none' type={showPassword === "password"? "password":"text"}   required value={formData.password} name='password' onChange={changeHandler}  placeholder='Enter email id'/>
        <span  className=' absolute right-3 text-slate-400 top-[3.4rem] text-xl' onClick={()=>{
            setShowPassword((prev)=>
                (prev==="password"?"text":"password")
            )
        }}> {showPassword!=="password"? <AiOutlineEyeInvisible />: <AiOutlineEye/>} </span>
        <Link to='#'><p className='text-end text-sm text-blue-800'>Forget password</p></Link>
        </label>
 

        <button className='w-full bg-yellow-500 rounded-md text-gray-950 font-bold py-2 mt-3'>Sign In</button>
      </form>
    </div>
  )
}

export default LoginForm
