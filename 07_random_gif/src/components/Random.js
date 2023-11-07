import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hoocks/useGif';



function Random() {

    // const [gif, setGif] = useState('');
    

    // const key = process.env.REACT_APP_GIPHY_KEY;
  
    //  const [loader, setLoader] = useState(false);
    // async function fetchData(){
    //   setLoader(true)
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
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

    const {gif, loader, fetchData} = useGif();

    
    function clickHandler()
    {
      fetchData();
    }

  return (
    <div className='bg-purple-700 relative rounded-md h-[400px] w-1/2 mx-auto border border-blue-950 gap-3'>
        <h1 className='text-white font-bold text-xl underline uppercase'>Random Gif</h1>
        <div className=' w-[80%] h-[70%] mx-auto mt-3    relative'> {loader?<Spinner/>:<img className='object-contain block max-h-[100%] max-w-full w-full mx-auto  absolute top-0 ' src={gif} alt=""   />} </div>
        <button className='font-bold translate-x-[-50%] absolute bottom-4 text-gray-800 bg-yellow-400 w-10/12 py-1 uppercase rounded-md ' onClick={clickHandler}>generate</button>
      
    </div>
  )
}

export default Random
