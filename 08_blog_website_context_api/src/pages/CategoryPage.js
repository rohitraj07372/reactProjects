import React from 'react'
import Header from '../components/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';

function CategoryPage() {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>
      <div className='mt-16 w-1/2 mx-auto flex gap-4 items-baseline'>
        <button  className='bg-slate-500 font-extrabold rounded-md px-4 py-2 ' onClick={()=>navigation(-1)}>
            BACK
        </button>
        <h2>
            Blogs on <span className='font-bold'>{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default CategoryPage
