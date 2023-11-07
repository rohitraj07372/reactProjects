 
import './App.css';
import Random from './components/Random'
import Tag from './components/Tag'



function App() {
  return (
    <div className="App relative background w-full flex flex-col items-center ">
    <h1 className='  bg-white w-[90%] rounded-lg p-2 font-bold mt-8 text-xl mx-auto'>RANDOM GIF</h1>
      <div className='flex flex-col mt-4 gap-3 w-full'>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
