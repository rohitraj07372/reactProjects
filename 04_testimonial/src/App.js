 
import './App.css';
import reviews from './data';
import Card from './components/Card';
import Testimonial from './components/Testimonial';
function App() {
  return (
    <div className="flex flex-col text-center gap-2 w-[100vw] h-[100vh] justify-center items-center border-r-gray-200  ">
      <div className="heading text-slate-700 font-bold text-[2rem] ">Our Testimonial</div>
      <div id='line' className='h-1 w-20 rounded-sm bg-slate-600'  ></div>
      <Testimonial reviews = {reviews}/>
    </div>
  );
}

export default App;
