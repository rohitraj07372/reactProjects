import React from 'react'
import { useState } from 'react'

function Form() {

    const[formData, setFormData] = useState({fname:"", lname:"", city:"",email:"", country:"",zip:"",street_address:"", state:"",comment:false, offer:false, Candidate:false,notification:"" })

    function changeHandler(event){
          setFormData((prevState)=>{ 
            return {
                ...prevState,
                [event.target.name]: (event.target.type ==="checkbox")?event.target.checked:event.target.value
            }
          });

       
    }
    function submitHandler(e){
        e.preventDefault();
        let x = formData;
        console.log(x);
    }

  return (
    <div className='bg-slate-100 p-2 w-[60vw]'>
      <form action="" onSubmit={submitHandler}>
        <div className='flex flex-col gap-1 mb-3'>
            <label htmlFor="lname" className='font-bold'>First Name</label>
            <input value={formData.fname} onChange={changeHandler} type="text" name="fname" id='fname' placeholder='Ram' className=' px-2 focus:outline-blue-500 outline-blue-300 outline-1 outline'   />
        </div>


        <div className='flex flex-col gap-1 mb-3'>
            <label htmlFor="lname" className='font-bold'>Last Name</label>
            <input value={formData.lname} onChange={changeHandler}   type="text" name="lname" id='lname' placeholder='Singh' className=' px-2 focus:outline-blue-500 outline-blue-300 outline-1 outline'/>
        </div>


        <div className='flex flex-col gap-1 mb-3'>
            <label htmlFor="email">Email</label>
            <input value={formData.email} onChange={changeHandler}   type="email" name="email" id='email' placeholder='abc@gmail.com' className=' px-2 focus:outline-blue-500 outline-blue-300 outline-1 outline'/>
        </div>


        <div className='flex flex-col gap-1 mb-3'>
            <label htmlFor="street_address" className='font-bold'>Street address</label>
            <input value={formData.street_address} onChange={changeHandler} type="text" name="street_address" placeholder='abc, xyz' id='street_address' className=' px-2 focus:outline-blue-500 outline-blue-300 outline-1 outline'/>
        </div>


        <div className='flex flex-col gap-1 mb-3'>
        <label htmlFor="country" className='font-bold'>Country</label>
           <select name="country"  id="country" value={formData.country} onChange={changeHandler} className=' px-2 focus:outline-blue-500 outline-blue-300 outline-1 outline'>
           <option value="" disabled >Choose Country</option>
            <option value="INDIA">INDIA</option>
            <option value="USA">USA</option>
            <option value="CANADA">CANADA</option>
            <option value="RUSSIA">RUSSIA</option>
           </select>
        </div>
          
        <div className='flex flex-col gap-1 mb-3'>
            <label htmlFor="state" className='font-bold'>State / provinces</label>
            <input value={formData.state} onChange={changeHandler} type="text" name="state" id='state' placeholder='bihar' className=' px-2 focus:outline-blue-500 outline-blue-300 outline-1 outline'/>
        </div>


        <div className='flex flex-col gap-1 mb-3'>
            <label htmlFor="city" className='font-bold'>City</label>
            <input value={formData.city} onChange={changeHandler} type="text" name="city" id='city' placeholder='Muzaffarpur' className=' px-2 focus:outline-blue-500 outline-blue-300 outline-1 outline'/>
        </div>


        <div className='flex flex-col gap-1 mb-3'>
            <label htmlFor="zip" className='font-bold'>zip / postal code</label>
            <input value={formData.zip} onChange={changeHandler} type="number" name="zip" id='zip' placeholder='12345' className=' px-2 focus:outline-blue-500 outline-blue-300 outline-1 outline'/>
        </div>


        {/* checkbox */}
        <div>
            <h4 className=' font-bold'>By Email</h4>
            <div className='flex gap-3 items-start'>
            <input checked={formData.comment} onChange={changeHandler} type="checkbox" name='comment' id='comment' className='mt-2' />
            <div  className='flex flex-col'>
            <label htmlFor="comment" className='font-semibold'>Comment.</label>
            <p className='text-sm opacity-75'>Lorem ipsum dolor sit amet.</p>
            </div>
          
            </div>

            <div className='flex gap-3 items-start'>
            <input checked={formData.Candidate} onChange={changeHandler} type="checkbox" name='Candidate'  className='mt-2' id='Candidate' />
            <div className='flex flex-col'>
            <label htmlFor="Candidate" className='font-semibold'>Candidate.</label>
            <p className='text-sm opacity-75'>Lorem ipsum dolor sit amet.</p>
            </div>
           
            </div>


            <div className='flex gap-3 items-start'>
            <input checked={formData.offer} onChange={changeHandler} type="checkbox" name='offer' id='offer' />
            <div className='flex flex-col'>
            <label htmlFor="offer" className='font-semibold'>Offer</label>
            <p className='text-sm opacity-75'>Lorem ipsum dolor sit amet.</p>
            </div>
            
            </div>

            
        </div>


        {/* radio button */}

        <div className='flex flex-col mt-2'>
            <h4 className='font-bold'>Push Notification</h4>
            <p className='text-sm opacity-75'>Lorem ipsum dolor sit amet.</p>
            <div>
                <div className='flex gap-3 mb-1'>
                <input checked={formData.notification==="everything"} onChange={changeHandler} type="radio" name='notification' id='everything' value='everything' />
                <label htmlFor="everything"   className='font-semibold'>Everything</label>
                </div>
               
               <div className='flex gap-3 mb-1'>
               <input checked={formData.notification === "same_as_email"} onChange={changeHandler} type="radio" name='notification' id='same_as_email' value="same_as_email"/>
                <label htmlFor="same_as_email"  className='font-semibold'>Same as Email</label>
               </div>

               <div className='flex gap-3 mb-1'>
               <input checked={formData.notification === "no_push_notification"} onChange={changeHandler} type="radio" name='notification' id='no_push_notification' value='no_push_notification' />
                <label htmlFor="no_push_notification" className='font-semibold'> No push notification</label>
               </div>
               
            </div>
        </div>
       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-1 rounded-sm mt-3'>Save</button>
      </form>
    </div>
  )
}

export default Form
