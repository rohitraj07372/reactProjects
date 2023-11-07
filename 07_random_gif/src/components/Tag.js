import React, { useEffect, useState } from 'react'

import Spinner from './Spinner';
import useGif from '../hoocks/useGif';

function Tag() {
  
  const [tag, setTag] = useState('');
   
      // change handler function
      function changeHandler(event){
              
        setTag(event.target.value);
       }


    // const key = process.env.REACT_APP_GIPHY_KEY;
  
    //  const [loader, setLoader] = useState(false);
    // async function fetchData(){
    //   setLoader(true)
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${tag}`;
    //   const data = await fetch(url);
    //   const res = await data.json();
    //    const ans = res.data.images.downsized_large.url; 
    //    console.log(ans);
    //   setGif(ans);
    //   setLoader(false);

    
    // }
    // useEffect(()=>{
    //   fetchData();
    // },[]);

    // click handler  
    const {gif,loader,fetchData}=useGif(tag);
    function clickHandler()
    {
      fetchData(tag);
    }

    function keypressHandler(e){
     
      if(e.key ==='Enter'){
      clickHandler();
      console.log(e.key);
      
      }

    }

  return (
    <div className='bg-red-400 relative rounded-md h-[400px] w-1/2 mx-auto border border-blue-950 gap-3'>
        <h1 className='text-white font-bold text-xl underline uppercase'>Random Gif for {tag}</h1>
        <div className=' w-[80%] h-[70%] mx-auto mt-3    relative'> {loader?<Spinner/>:<img className='object-contain block max-h-[100%] max-w-full w-full mx-auto  absolute top-0 ' src={gif} alt=""   />} </div>
        <input type="text" onKeyUp={keypressHandler} className='w-[80%]  rounded-md bg bg-gray-500  bg-opacity-40 font-bold border text-center' onChange={changeHandler} name='tag'  placeholder='type anything'/>
        <button className='font-bold translate-x-[-98%] absolute bottom-4 text-gray-800 bg-yellow-400 w-10/12 py-1 uppercase rounded-md ' onClick={clickHandler} >generate</button>
      
    </div>
  )
}

export default Tag
