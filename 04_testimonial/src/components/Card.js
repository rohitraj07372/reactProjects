import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';


function Card(props) {
    let {name,image,job,text,id} = props.review;
  return (
    <div className='flex flex-col md:relative  '>
        <div className='absolute top-[-7rem]  mx-auto'>
           
        <img className='aspect-square rounded-full h-[140px] w-[140px] z-10' src={image} alt="profile" />
        <div className='absolute top-[-6px] -z-10 left-2 h-[140px] w-[140px]  rounded-full bg-blue-600 '></div>
        </div>
       
      <div className="nameContainer">
        <h2 className='font-bold text-gray-700 text-xl'>{name}</h2>
        <p className='opacity-[.7]'>{job}</p>
        <div className='text-blue-600 mx-[50%] mb-4 '><FaQuoteLeft/></div>
        
        <div className='text-blue-600 opacity-70'>
            {text}
        </div>
       
        <p className='text-blue-600 mx-[50%] mt-4'><FaQuoteRight/></p>
       
      </div>
    </div>
  )
}

export default Card
