 
 
import Header from './components/Header';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import { useContext, useEffect } from 'react';
import { AppContext } from './contexts/AppContext';
import {Routes, Route, useSearchParams, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import TagPage from './pages/TagPage'
import CategoryPage from './pages/CategoryPage'
import BlogPage from './pages/BlogPage'

 
function App() {
  const {fetchBlogPost} = useContext(AppContext);

 const[searchParam, setSearchParam] =  useSearchParams();
 const location = useLocation();

  useEffect(()=>{
   const page = searchParam.get("page")??1;
   if(location.pathname.includes('tags')){
    const tag = location.pathname.split("/").at(-1).replaceAll("_"," ");
   }
   else if(location.pathname.includes('category')){
    const category = location.pathname.split("/").at(-1).replaceAll("_"," ");
   }


   else{
    fetchBlogPost(Number(page))
   }
  },[location.pathname, location.search]);
  return (

    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/blog/:blogId' element= {<BlogPage/>} />
      <Route path='/tag/:tag' element= {<TagPage/>} />
      <Route path='/categories/:category' element= {<CategoryPage/>} />
    </Routes>


    // <div className="">
    //   <Header/>
    //   <Blogs />
    //   <Footer/>
    // </div>
  );
}
 

export default App;
