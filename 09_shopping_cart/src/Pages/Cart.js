import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cartitem from '../components/Cartitem';
import {Link} from 'react-router-dom'



function Cart() {

    const {cart} = useSelector((state)=>state);
    const[totalAmount,SetTotalAmount] = useState(0);
    useEffect(()=>{
      SetTotalAmount(cart.reduce((acc, curr)=>acc+curr.price,0));
    },[cart])

  return (
    <div className=' mt-14  w-2/3 mx-auto '>
       
      {
        
        cart.length >0?(<div className='flex gap-6'><div className='w-[60%]'>
            {
                cart.map((item, index)=>(
                   <Cartitem key={item.id} item={item} itemIndex={index}/>
                )

                )
            }

            </div>

<div>
            <div className='flex flex-col justify-between h-full'>
              <div>
                <p className='text-green-600 font-semibold text-xs'>YOUR CART</p>
                <p className='text-xl text-green-600 capitalize font-bold ' >SUMMARY</p>
                <p className='font-bold'>Total Item: <span className='font-bold '>{cart.length}</span></p>
              </div>
             
            <div>
              <p className='font-bold  text-xs'>Total Amount: ${totalAmount}</p>
              <button className='bg-green-600 w-full text-center rounded-md font-bold text-white '> Checkout Now</button>
            </div>
            </div>
</div>
        </div>) :(<div className='flex flex-col gap-2 justify-center items-center w-screen h-screen -mt-14   '><h1 className='font-bold text-lg'>Cart is Empty</h1>
        <Link to='/'>
          <button className='font-bold text-white bg-green-700 hover:bg-green-500 rounded-md px-3 py-1'>Shop Now</button>
        </Link>
        </div>)
      }
    </div>
  )
}

export default Cart
