import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext';
import Spinner from './Spinner';
import Card from './Card';

function Blogs() {
    const {posts,loading} = useContext(AppContext);
  return (
    <div className='w-6/12 max-w-[800px] mx-auto'>
       {
        loading? <div className=' w-full h-screen flex justify-center items-center '><Spinner/></div>:(
            posts.length===0? 
            (<div className=' w-full h-screen flex justify-center items-center font-bold text-xl '><p>No data found</p></div>)
            : (posts.map((post,index)=> (<div  key={index} className='mt-16 mb-16'><Card key={post.id} post ={post} /></div>)))

        )
       }
    </div>
  )
}

export default Blogs
