import React, { useState } from 'react'
import Card from './Card'
import {AiFillRightCircle,AiFillLeftCircle} from 'react-icons/ai'
 
function Testimonial( props) {
    let reviews = props.reviews;


   const [index, setIndex] =useState(0);
   
   function rightHandler(){
         (index+1 >= reviews.length)? setIndex(0):setIndex(index+1)
   }
   function leftHandler(){
       (index -1 < 0)? setIndex(reviews.length-1):setIndex(index-1);
   }
   function surpriseHandler(){
      let rndm = Math.floor(Math.random() * reviews.length);
      setIndex(rndm) ;
   }

  return (
    <div className=' w-[85vw] md:w-[700px] bg-slate-200 hover:shadow-lg p-6 z-20 rounded-md'>
       <Card review = {reviews[index]}/>
        <div className="left-right-button flex gap-4  cursor-pointer justify-center mt-5 ">
        <button onClick={leftHandler} className='text-blue-500 text-2xl'><AiFillLeftCircle/></button>
        <button onClick={rightHandler} className='text-blue-500 text-2xl'><AiFillRightCircle/></button>
        </div> 
        <button onClick={surpriseHandler} className=' hover:bg-blue-500 bg-blue-600 text-white font-bold px-6 py-2 rounded-sm mt-4 '>Surprise Me</button>
    </div>
  )
}

export default Testimonial
