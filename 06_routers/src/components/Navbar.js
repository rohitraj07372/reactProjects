import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg'


function Navbar({isLoggedIn, setLoggedIn}) {
  return (
    <div className='flex gap-3  justify-evenly pt-2  bg-slate-950 pb-2'>
      <Link to='/'>
        <img src={logo} alt="logo"  width={160} height={32} loading='lazy'/>
      </Link>
      
      <nav className=''>
        <ul className='flex gap-3'>
            <li>
                <Link to='/' >Home</Link>
               
            </li>
            <li>
                <Link to='/' >About</Link>
               
            </li>
            <li>
                <Link to='/' >Contact</Link>
               
            </li>
        </ul>
      </nav>
       
     {/*  login signup dashboard and logout button*/}
     <div className="buttons flex gap-3 ">
        {/*
           !isLoggedIn ? <Link to="/signup">Sign Up</Link> : null
          */
        }
       { 
         !isLoggedIn &&
         <Link to='/login'><button className='bg-slate-800 px-4 py-1 font-bold cursor-pointer rounded-md hover:bg-slate-600' > Login</button> </Link>
       }
       { !isLoggedIn && <Link to='/signup'><button  className='bg-slate-800 px-4 py-1 font-bold cursor-pointer rounded-md hover:bg-slate-600' >Sign Up</button> </Link>}
       { isLoggedIn && <Link to='/'><button  className='bg-slate-800 px-4 py-1 font-bold cursor-pointer rounded-md hover:bg-slate-600' onClick={()=>
           setLoggedIn(false)
           }>Log Out</button > </Link>}
       { isLoggedIn && <Link to='/dashboard'><button  className='bg-slate-800 px-4 py-1 font-bold cursor-pointer rounded-md hover:bg-slate-600'> Dashboard</button></Link>}
     </div>

     
    </div>
  )
}

export default Navbar
