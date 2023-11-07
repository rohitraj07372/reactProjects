import React from 'react'
import {useState,useEffect} from 'react'
import Spinner from '../components/Spinner';
 
import Item from '../components/Item';
 

function Home() {
    const API_URL = "https://fakestoreapi.com/products";

    const[loading, setLoading] = useState(false);
    const [items, setitem] = useState([]);

async function fetchProductData(){

    setLoading(true);
    try {
        const res = await fetch(API_URL);
        const data =  await res.json();
        setitem(data);
    } catch (error) {
        setitem([]);

        
    }
    setLoading(false);
}

useEffect(()=>{
  fetchProductData();
},[])

  return (
    <div className='mt-14    '>
   
      {
        loading? <div className=' -mt-14 h-screen w-screen    flex justify-center items-center'><Spinner/></div>: 
        items.length>0?
         <div className='grid grid-cols-4 w-8/12 p-2 mx-auto gap-2   '>
            {items.map((item)=>( <Item  key={item.id} item={item}/>)
                
            )}
         </div>:
        <div className='font-bold text-lg italic flex justify-center h-screen w-screen -m-14 items-center '>
            No Item found
        </div>
        
         
      }
    
    </div>
  )
}

export default Home
