import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl'

export  const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);


async function fetchBlogPost(page = 1,tag=null, category){
    setLoading(true);
    let url =`${baseUrl}?page=${page}`
    if(tag){
        url+=`&tag=${tag}`;

    }
    if(category){
        url+=`&category=${category}`;
    }
    try {
         
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        setPage(data.page);
        setPosts(data.posts);
        setTotalPages(data.totalPages)
        
    } catch (error) {
         
        setPage(1);
        setPosts([]);
        setTotalPages(null);
        
    }
    setLoading(false);
   
}

function handlePageChange(page){
  setPage(page);
  fetchBlogPost(page);

}


const value = {
    posts,
    loading,
    page,
    totalPages,
    setLoading,
    setPosts,
    setPage,
    setTotalPages,
    handlePageChange,
    fetchBlogPost

};
 

return <AppContext.Provider value = {value}>
   { children}
</AppContext.Provider>
}