import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from 'react-hot-toast'
import {add, remove} from '../redux/slices/CartSlice'

function Item({item}) {
  const {cart} = useSelector((state)=> state);
const dispatch = useDispatch();
const addToCart = ()=>{
  dispatch(add(item));
  toast.success("item added")
}

const removeFromCart = ()=>{
  dispatch(remove(item.id));
  toast.error("item removed");
}

  return (
    <div className='   hover:shadow-2xl   hover:transition duration-300 hover:scale-110 rounded-md   p-2 flex flex-col hover:bg-white  items-center justify-between '>
      <div>
        <p className=' font-semibold text-[16px] '>{item.title.substring(0,10)+"..."}</p>
      </div>
      <div>
        <p className=' text-[10px]  '>{item.description.substring(0,100)+"..."}</p>
      </div>
      <div className='h-[180px]'>
        <img className='w-full h-full mt-2 mb-2 ' src={item.image} alt=""     />
      </div>
      <div className='flex justify-between w-full mt-4    '>
      <div>
        <p className=' text-[20px] text-green-700 font-bold '>${item.price}</p>
      </div>
       <div className=' text-[12px] bg-slate-800 rounded-full font-semibold text-white px-1 hover:bg-slate-700 flex justify-center items-center '>
       {
            cart.some((p)=>p.id === item.id)?<button className='capitalize' onClick={removeFromCart}>Remove Item</button>:<button className='capitalize' onClick={addToCart}>Add to Cart</button>
        }
    
       </div>
       
      </div>
     
    </div>
  )
}

export default Item
