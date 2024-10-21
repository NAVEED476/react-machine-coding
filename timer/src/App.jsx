import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [timer, setTimer] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [reverse, setIsReverse] = useState(false);


  useEffect(()=>{
    let interval = null;
    if(startTimer){ 
      interval = setInterval(()=>{
        setTimer((prev)=>reverse ? prev - 1 : prev+1)
      },1000)
    }
    return ()=>clearInterval(interval)

  },[startTimer, reverse])

  const startTime = () =>{
    setStartTimer(true);
  }

  const stopTimer =() =>{
    setStartTimer(false);
  }
  const reverseTimer = () =>{
    setIsReverse(true); 
  }

  const resetTimer = () =>{
    setStartTimer(false);
    setTimer(0);
  }
  
  return (
    <>
     <h1>Timer :: {timer}</h1>
    <button onClick={()=>startTime()}>Start</button>
    <button onClick={()=>stopTimer()}>Stop</button>
    <button onClick={()=>reverseTimer()}>Reverse</button>
    <button onClick={()=>resetTimer()}>Reset</button>
    </>
  )
}

export default App
