import React, { useEffect, useState } from 'react'
import Error404 from '../components/Error404';


function useGif(tag) {


  const [gif, setGif] = useState('');
   
  const key = process.env.REACT_APP_GIPHY_KEY;
  const randomGif = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
  const tagGif = `https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${tag}`;
 
    
   
     


   const [loader, setLoader] = useState(false);


  async function fetchData(){
    try{
        setLoader(true)
         
        const data = await fetch(tag?tagGif:randomGif);
        const res = await data.json();
         const ans = res.data.images.downsized_large.url; 
         console.log(ans);
        setGif(ans);
        setLoader(false);
    
    }
    catch(error){
          <Error404/>
    }
   
  
  }
  useEffect(()=>{
    fetchData();
  },[]);


  return{
    gif,loader,fetchData
  };
 
}
export default useGif
