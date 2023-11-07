import React from 'react'

function Filter({filterData, category, setCategory}) {

function filterHandler(title){
  setCategory(title);
}

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto  justify-center text-white px-4  mt-4 mb-4  '>
      {filterData.map((data)=>{
             return <button key={data.id} onClick={ ()=> filterHandler(data.title)} className={` bg-slate-900 px-4 py-2 rounded-sm  ${(category === data.title)? "bg-opacity-60 border-white  border-2 rounded-sm ": "bg-slate-900 px-4 py-2 rounded-sm "}`} >
                {data.title}
              </button>
      })
      }
    </div>
  )
}

export default Filter
