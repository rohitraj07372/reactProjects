import React, { useState } from 'react'

function Card({id,image,name,info, price, removeTour}) {

    const[readMore, setReadMore] = useState(false);
    const description = readMore ? info : `${info.substring(0,200)}...`;
   
function readMoreHandler(){
    setReadMore (!readMore);
}



  return (
    <div className='card'>
        <div className='tourInfo'>
        <img src={image} alt="" className='image' />
         <div className="tourDetails">
            <h4 className='price'>{price}</h4>
            <h4 className='price'>{name}</h4>
         </div>
         <div className="description">
              {description}
              <span className='readMore' onClick={readMoreHandler}>
                {readMore ? `Show-less`  : `Read-more`}
              </span>
         </div>
        </div>
        
         <button className='notInterested' onClick={()=>{
          removeTour(id);
         }}>Not Interested</button>
    </div>
  )
}

export default Card
