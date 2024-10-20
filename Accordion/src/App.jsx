import { useState } from 'react'
import './App.css'

function App() {

  // const [show, setShow] = useState(false);
  // const checkAccordion = () => {
  //   setShow(!show);
  // }

  const [accordion, setAccrodion] = useState(null);
  const data = [
    {
      header: "Header 01",
      content: 'conntent 01'
    },
    {
      header: "Header 02",
      content: 'conntent 02'
    },
    {
      header: "Header 03",
      content: 'conntent 03'
    },
    {
      header: "Header 04",
      content: 'conntent 04'
    },
  ]

  const handleClick = (i) => {
    setAccrodion(i)
  }

  return (
    <>
      {/* <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <h1>Accordion</h1>
        <button onClick={checkAccordion} style={{ height: "30px", fontSize: "20px", display: "flex", alignItems: "center" }}>{show ? "-" : "+"}</button>
      </div>
      {show && <p>Hey ! this is Accordion</p>} */}

      <div>
        {data && data.map((item, index) => {
          return (
            <div onClick={() => handleClick(index)}>              
            
            <div className="header">{item.header}</div>
              {accordion === index && <div>{item.content}</div>}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
