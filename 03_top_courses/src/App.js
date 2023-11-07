 
import './App.css';
import {apiUrl, filterData} from './data';

import Spinner from './components/Spinner'
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
 
    //arrow function
    const fetchData = async ()=>{
      setLoading(true);
      try{

        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);
        //save data into a variable
        setCourses(data.data);
      }
      catch(error){
        toast.error('Something went wrong');
      }
      setLoading(false);
    }
    
    useEffect(()=>{
    fetchData();
  },[]);



  return (
    <div className="min-h-screen flex flex-col   bg-slate-700 ">
      <div> <Navbar /></div>
      <div className='bg-slate-700'>
      <div>
       <Filter category = {category} setCategory = {setCategory} filterData = {filterData} />
       <div className=' flex w-11/12 max-w-[1200px] flex-wrap mx-auto relative '>
        {loading? <Spinner /> : <Cards courses = {courses} category = {category} />}
        </div>
     
     </div>
      </div>
     
   
    
    </div>
  );
}

export default App;
