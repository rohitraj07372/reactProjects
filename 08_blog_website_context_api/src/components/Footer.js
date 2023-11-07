import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

function Footer() {

    const{totalPages, handlePageChange, page} = useContext(AppContext);

  return (
    <div className='fixed  translate-x-[50%]  w-6/12  bottom-0 flex bg-white shadow-md  justify-between   pb-1 pt-1'>
      <div className='flex gap-2'>
        {
            page < totalPages &&(
            <button onClick={()=>{
                handlePageChange(page+1)}}  className='bg-slate-500 font-bold rounded-sm px-2 py-1 hover:bg-slate-400'>Next</button>)
            }


           { page > 1 &&(
           <button onClick={()=>{handlePageChange(page-1)}}   className='bg-slate-500 font-bold rounded-sm px-2 py-1 hover:bg-slate-400' >Previous</button>)}
      
        
      </div>
      <div>page {page} of {totalPages}</div>
    </div>
  )
}

export default Footer
