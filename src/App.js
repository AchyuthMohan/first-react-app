import {useState} from 'react'
import './app.css'
import Header from './components/header';
function App() {
  const [count,setCount]=useState(0)
  const addCount=()=>{
    setCount(count+1)
    
  }
  return (
    <div className="hello">
      <button onClick={addCount}>Add</button>
    <h1>Counter: {count}</h1>
    </div>
    );
}


export default App;
