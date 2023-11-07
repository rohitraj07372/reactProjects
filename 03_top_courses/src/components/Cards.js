import React, { useState } from 'react'
import Card  from './Card';
function Cards({courses,category}) {
    let allCourses= [];
     const [likedCourses, setLikedCourses] = useState([]);
    
    const getCourses = ()=>{
        if(category === "All"){
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((courses)=>{
                    allCourses.push(courses);
                })
    
            })
            return allCourses;
            
        }
        else{
            return courses[category];
        }
       
    }
  return (
    <div className=' flex flex-wrap mx-auto gap-2 justify-center '>
     {
        getCourses().map((course)=>{
            return <Card key = {course.id} course = {course} likedCourses = {likedCourses} setLikedCourses= {setLikedCourses} />
        })
     }
    </div>
  )
}

export default Cards
