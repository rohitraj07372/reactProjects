import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {FaCartShopping} from 'react-icons/fa6'
import { useSelector } from 'react-redux';

function Navbar() {
  const {cart} = useSelector((state) => state);
  return (
    
    <div className=' bg-slate-900 p-2 fixed top-0 w-full '>
        <div className='flex justify-between items-center w-8/12 mx-auto'>
        <Link to='/'>
          <div>
            <img src="https://media.licdn.com/dms/image/D5603AQEMmOXCyeufSQ/profile-displayphoto-shrink_800_800/0/1699168341025?e=1704931200&v=beta&t=fgBYrTRXtQTWl-UkMABSMNg2zg5pU46sVK_jgnfyJZg " alt=" " width='60px'  className='rounded-full border border-white' /></div>
      </Link>
      
            <div className='flex gap-3 items-center text-white'>
                <NavLink to='/'>
                    <p className='hover:text-green-600  '>Home</p>
                </NavLink>
                
                <NavLink to='/cart'>
                    <div className='hover:text-green-600 relative' > <FaCartShopping/>
                    {
                      cart.length > 0 &&  <span className='absolute -right-1 -top-1 bg-green-800 rounded-full w-3 h-3 text-[16px] flex justify-center items-center p-1 font-semibold'>{cart.length}</span>
                    }
                   
                    </div>
                
                </NavLink>
                
            </div>
      
        </div>
      
    </div>
  )
}

export default Navbar
