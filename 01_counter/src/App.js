 
import './App.css';
import React, {useState} from  'react';

function App() {

const [count, setCount] = useState(0);

 function minusHandler()
 {
     setCount(count-1);
 }
 function plusHandler(){
  setCount(count+1);
 }
 function resetHandler()
 {
    setCount(0);
 }

  return (
    <div className="App">
       <div className="main"> 
         <p>Increment and decrement</p>
         <div className="application_div">
         <div className="minus_button">

                <button className="minus" onClick={minusHandler}>-</button>
          </div>

          <div className="count">{count}</div>
               
          <div className="plus_button">
                <button className="plus" onClick={plusHandler}>+</button>
          </div>
          </div>
          <button className="reset" onClick={resetHandler}>
            RESET
          </button>
     </div>
    </div>
  );
}

export default App;
