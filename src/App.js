import {useState} from 'react'
import './app.css'
import Header from './components/header';
import Employee from './Employee';

function App() {
  const [count,setCount]=useState(1)
  const addCount=()=>{
    setCount(count+1)
    
  }
  let emp =[{name:'achyuth',age:19},
  {name:'Adam',age:19}];
    
  
  return (
    <div className="hello">
      
      {
        emp.map((obj,index)=>{
          return (
            <Employee key={index} {...obj} />
          )
        })}
      
    
    
    </div>
    );
}


export default App;
