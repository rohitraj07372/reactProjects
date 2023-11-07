import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';
function Card(props) {

let course = props.course;
let likedCourses = props.likedCourses;
let setLikedCourses = props.setLikedCourses;

 function likeHandler(){
  if(likedCourses.includes(course.id)){
    setLikedCourses((prev)=> prev.filter((cid)=>(cid!==course.id)));
    toast.warning("liked removed");
  }
else{
  //phale se liked nahi hai
  //insert krna hai liked me
  if(likedCourses.length === 0)
  {
    setLikedCourses([course.id]);
  }
  else{
       //phale se not empty
       setLikedCourses((prev)=> [...prev, course.id]);
  }
  
    toast.success("liked Successfully");
}

 }

  return (
    <div className='w-[300px] bg-slate-900 rounded-t-md text-white relative justify-self-center '>
      <img src={course.image.url} alt='course_image' width='300px' className='rounded-t-md'/>


      <div>
        <button className='rounded-full bg-pink-50 p-1 absolute right-2 top-[9.3rem]' onClick={likeHandler}>
           
          { likedCourses.includes(course.id)? <FcLike fontSize="1.7rem" /> :  <FcLikePlaceholder fontSize="1.7rem" /> }
        </button>
        </div>
        <div className='p-2'>
            <p>{course.title}</p>
            <p>{(course.description.length > 100)? course.description.substr(0,100)+'...' : course.description}</p>
        </div>
    </div>
  )
}

export default Card
