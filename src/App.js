import {useState} from 'react'
import './app.css'
import Header from './components/header';
import Counter from './counter';
function App() {
  const [count,setCount]=useState(1)
  const addCount=()=>{
    setCount(count+1)
    
  }
  let obj={
    title:'1st counter',
    count
    ,
    place:'hello'
  }
  return (
    <div className="hello">
      <button onClick={addCount}>Add</button>
      <Counter {...obj} />
      <Counter title='2nd counter' count={count} />
    
    </div>
    );
}


export default App;
