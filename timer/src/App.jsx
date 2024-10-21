import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [timer, setTimer] = useState(0);
  const [startTimer, setStartTimer] = useState(false);


  useEffect(()=>{
    let interval ;
    if(startTimer){
      interval = setInterval(()=>{
        setTimer((prev)=>prev+1)
      },1000)
    }
    return ()=>clearInterval(interval)

  },[timer])

  const startTime = () =>{
    setStartTimer(true);
  }

  const stopTimer =() =>{
    setTimer(false);
  }
  
  return (
    <>
     <h1>Timer :: {timer}</h1>
    <button onClick={()=>startTime()}>Start</button>
    <button onClick={()=>stopTimer()}>Stop</button>
    <button>Reverse</button>
    <button>Reset</button>
    </>
  )
}

export default App
