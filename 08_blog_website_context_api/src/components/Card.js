 import { NavLink } from "react-router-dom"

function Card({post}) {
    
  return (
    <div className=''>
      <NavLink to={`./blog/${post.id}`}>
      <p className="font-bold">{post.title}</p>
      </NavLink>
      
       <p>By <span className="font-semibold italic">{post.author}</span>on {" "} 
       <NavLink to={`./categories/${post.category.replaceAll(" ","_")}`}>
       <span className="font-semibold">{post.category}</span>
       </NavLink>
       </p>
       <p>posted on <span className="font-semibold">{post.date}</span></p>
      <p className="pt-2">{post.content}</p>
      <div className="font-semibold text-blue-800 pt-2 underline">
        {post.tags.map((tag,index)=>  ( 
          <NavLink to={`./tag${tag.replaceAll(" ","_")}`}>
             <span key={index}> `#${tag}  `</span>
          </NavLink>
          ))}
      </div>
    </div>
  )
}

export default Card
