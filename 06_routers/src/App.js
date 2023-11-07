 
 
import './App.css';
import Navbar from './components/Navbar';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';
 
function App() {
 
  const[loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="w-screen h-screen bg-slate-900 text-white" >
       
      <Navbar isLoggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
 
  
       <Routes>
      
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>}/>
          <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={loggedIn}>
              <Dashboard/>
          </PrivateRoute>
          }/>
          <Route path='/signup' element={<Signup  setIsLoggedIn={setLoggedIn}/>}/>

      </Routes>
   
      

    </div>
  );
}

export default App;
