 import { useState } from "react";
import Tours from "./components/Tours";
import data from "./data.js";

const App = () => {

  const[tours, setTours] = useState(data)
   
  function removeTour(id){
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h1>No tours Left</h1>
        <button className="ref_button" onClick={()=>{
          setTours(data);
        }}>REFRESH</button>
      </div>
    );
  }

  return (
    <div className="App">
   
     <Tours tours = {tours} removeTour = {removeTour}></Tours>
    </div>
  )
};

export default App;
