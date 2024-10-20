import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <BasicCounter/>
    </>
  )
}

export default App


function BasicCounter (){
  const [counter, setCounter] = useState(0);

  const Addition = () =>{
    setCounter(prev => prev + 1)
  }


  const Subtraction = () =>{
    setCounter (prev => prev-1)
  }

  const multiplication=()=>{
    setCounter(prev=> prev*2)
  }

  const division = () =>{
    setCounter(prev => prev / 2);
  }

  const reset = () =>{
    setCounter(0
      
    )
  }
  return(<>
  <h4>Basic Counter</h4>
  <h3>Count:{counter}</h3>
  <button onClick={Addition}>Add</button>
  <button onClick={Subtraction}>Subtract</button>
  <button onClick={multiplication}>Multiply</button>
  <button onClick={division}>Division</button>
  <button onClick={reset}>Reset</button>
  </>)
}