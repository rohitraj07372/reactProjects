import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';

function TagPage() {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    console.log(tag);
  return (
    <div>
      <Header/>
      <div>
        <button onClick={()=>navigation(-1)}>
            BACK
        </button>
        <h2>
            Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>
    </div>
  )
}

export default TagPage
