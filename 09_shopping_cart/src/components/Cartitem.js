import React from 'react'
import {toast} from 'react-hot-toast';
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import {remove } from '../redux/slices/CartSlice'

function Cartitem({item, itemIndex}) {
  const dispatch=useDispatch();
  const removeFromCart = ()=>{
         dispatch(remove(item.id));
         toast.success('item removed');
  }
  return (
    <div className='    border-b-2  border-slate-600 pb-2 pt-2'>


      <div className=' flex gap-3'>
      <div className=' w-[200px]'>
        <img src={item.image} alt=""  />
      </div>
      <div>
      <div>
        <h1 className='font-bold text-sm'>{item.title}</h1>
        <h1 className='text-[16px]'>{item.description.substring(0,100)}</h1>
      </div>
      <div className='flex justify-between mt-3'>
      <div>
        <p className='text-green-700 font-bold' >${item.price}</p>
      </div >
      <div className='bg-red-300 flex text-red-700 justify-center items-center rounded-full w-6 h-6' onClick={removeFromCart}>  < MdDelete/></div>
      </div>
      
      
      </div>
      
      
      </div>
     
    </div>
  )
}

export default Cartitem
