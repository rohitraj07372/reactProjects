import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
function SignupForm({setIsLoggedIn}) {


  const navigate = useNavigate();
const[formData, setFormData] = useState({firstName:"", lastName:"", email:"",password:"",confirmPassword:""});

function changeHandler(event){
  setFormData((prev)=>{
    return{
      ...prev,[event.target.name]:event.target.value
    }
  })
}
const[showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

function submitHandler(event){
  event.preventDefault();

 

   if(formData.password !== formData.confirmPassword){
    toast.error("Password do not match");
    return;
   }
   setIsLoggedIn(true);
   toast.success('account created');
   navigate("/dashboard");

   const accountData = {
    ...formData
   }

   const finalData = {...accountData, switchButton}
   console.log("printing final data");
   console.log(finalData);
}

const [switchButton, setSwitchButton ] = useState("student");
 
  return (
    <div className='mt-3 w-full'>
      {/*student-instructor-tab*/}
      <div className='flex gap-x-9 p-2  max-w-max  rounded-full justify-evenly items-center bg-slate-800 mb-3'>
          <button className={`${switchButton === "student"?"bg-slate-900 text-white   rounded-full": "bg-transparent transition-all duration-200 text-slate-300 " } py-1 px-2 `} onClick={()=>{
          setSwitchButton("student");
        }}>Student</button> 

         <button  className={`${switchButton === "instructor"?"bg-slate-900 text-white  rounded-full   ": "bg-transparent transition-all duration-200 text-slate-300 " }py-1 px-2`} onClick={()=>{
          setSwitchButton("instructor");
        }}>Instructor</button> 
      </div>
      <form action="" onSubmit={submitHandler}>
        <div className='flex gap-3 mb-3'>
        <label >
          <p className='text-sm '>First Name <sup className='text-red-700'>*</sup></p>
          <input type="text"  className='w-full rounded-md bg-slate-800 px-2 py-1 active:border-b-3 active:border-slate-600 focus:outline-none ' required placeholder='Enter your first name' onChange={changeHandler} name='firstName'/>
        </label>

        <label >
          <p className=' text-sm'>Last  Name <sup className=' text-red-700'>*</sup></p>
          <input className='w-full rounded-md bg-slate-800 px-2 py-1 active:border-b-3 active:border-slate-600 focus:outline-none ' type="text" required placeholder='Enter your last name' onChange={changeHandler} name='lastName'/>
        </label>

        </div>
 
       <div>
       <label >
          <p className=' text-sm '>Email <sup className='text-red-700'>*</sup></p>
          <input className='w-full rounded-md bg-slate-800 px-2 py-1 active:border-b-3 active:border-slate-600 focus:outline-none ' type="text" required placeholder='Enter your email' onChange={changeHandler} name='email'/>
        </label>
       </div>
        <div className='flex gap-3 mt-3'> 
       <div>
       <label className='relative' >
          <p className=' text-sm'>Password <sup className='text-red-700'>*</sup></p>
          <input className='w-full placeholder:text-sm rounded-md bg-slate-800 px-2 py-1 active:border-b-3 active:border-slate-600 focus:outline-none ' type={showPassword ? 'text':"password"} required placeholder='Enter password' onChange={changeHandler} name='password'/>
          <span className='absolute right-3 text-gray-400 top-[1.6rem] text-xl' onClick={()=>{
            setShowPassword((prev)=>!prev)
          }}>{showPassword?<AiOutlineEyeInvisible/>: <AiOutlineEye/>}</span>
        </label>
       </div>

       <div >
       <label className='relative' >
          <p className='text-sm'>Confirm Password <sup className='text-red-700'>*</sup></p>
          <input className='w-full rounded-md bg-slate-800 px-2 py-1 active:border-b-3 active:border-slate-600 focus:outline-none placeholder:text-sm ' type={showConfirmPassword ? 'text':"password"}
           required
           placeholder='Confirm password'
           onChange={changeHandler} 
           name='confirmPassword'/>
          <span className='absolute right-3 text-gray-400 top-[1.6rem] text-xl' onClick={()=>{
            setShowConfirmPassword((prev)=>!prev)
          }}>{showConfirmPassword?<AiOutlineEyeInvisible/>: <AiOutlineEye/>}</span>
        </label>
       </div>
       </div>
      <button className='w-full mx-auto mt-3 bg-yellow-500 text-gray-900 font-bold rounded-md py-1 '>Create Account</button>
      </form>
    </div>
  )
}

export default SignupForm
