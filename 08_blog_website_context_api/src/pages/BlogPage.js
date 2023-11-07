import React, { useContext, useEffect, useState } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
 
import Header from '../components/Header';
import Card from '../components/Card';

function BlogPage() {
    const [blog, setBlog] = useState(null);
    const [ relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {loading, setLoading} = useContext(AppContext);
    const blogId = location.pathname.split('/').at(-1); 

   async function fetchRelatedBlogs(){
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
        let res = await fetch(url);
        let data = await res.json();
        setBlog(data.blog);
        setRelatedBlogs(data.relatedBlogs)
        
    } catch (error) {

        setBlog(null);
        setRelatedBlogs([]);
    }
   setLoading(false);
   }

   useEffect(()=>{
    if(blogId){
        fetchRelatedBlogs();
    }
   },[location.pathname])
  return (
    <div>
      <Header/>
      <div className=' mt-16 w-6/12 flex flex-col mx-auto'>
      <div className=' '>
        <button className='bg-slate-300 border px-4 rounded-md py-1' onClick={()=>{
            navigation(-1)
        }}>
            Back
        </button>
      </div>
      <div className=''>
        {
            loading? <p className=' flex   justify-center items-center'>Loading...</p>: blog? <div>
              <Card post={blog} />
              <h2 className='font-bold text-xl mt-2 mb-2 underline bg-gray-600 text-white p-2'>Related Blogs</h2>
              {
                relatedBlogs.map((post)=>(
                   <div className='mt-2 border-b-2 ' key={post.id}>
                    <Card post={post}/>
                   </div>)
                )
              }
            </div> : <div className='w-full font-bold text-xl flex justify-center items-center'><p>No Blog Found</p></div>
            
            }
      </div>
    </div>
    </div>
  )
}

export default BlogPage
