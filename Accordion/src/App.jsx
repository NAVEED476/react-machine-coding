import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <BasicAccordion />
      <MediumLevelAcccodion/>
    </>
  )
}

export default App



function BasicAccordion() {
  const [showText, sethowText] = useState(false);

  const showAccordion = () =>{
    sethowText(!showText)
  }
  return (<>
    <h1>Basic Accordion</h1>
    <div style={{display:"flex", alignItems:"center",gap:"10px", maxHeight:"30px"}}>
      <h4>Show Accordion</h4>
      <button onClick={()=>showAccordion()}>{showText ? "-" : "+"}</button>
      {showText && <p>Hello world</p>}    
    </div>
   
  </>)
}




function MediumLevelAcccodion (){
  const [showAccordion, setShowwAccordion] = useState(null);

  const data = [
    {
      header:"header 1",
      content: 'content 1'
    },
    {
      header:"header 2",
      content: 'content 2'
    },
    {
      header:"header 3",
      content: 'content 3'
    },
    {
      header:"header 4",
      content: 'content 4'
    },

  ]

  const handleClick = (i) =>{

    console.log(i);
    setShowwAccordion(i);
  }
  
  return(
    <>
    <h1>medium level</h1>

    <div>
      {data.map((value,index)=>{
        return(
          <div onClick={()=>handleClick(index)}>
            <h4>
              {value.header}
            </h4>
            {showAccordion === index && <p>{value.content}</p>}
          </div>
        )
      })}
    </div>
    </>
  )
}