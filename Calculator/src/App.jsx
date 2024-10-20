import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <BasicCounter/>
      <AdvancedLevelCalculator/>
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




function AdvancedLevelCalculator() {
  // State to store user input and result
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState(null);

  // Handles button clicks (numbers and operators)
  const handleClick = (value) => {
    setUserInput(prev => prev + value);
  };

  // Handles the evaluation of the expression
  const handleEvaluate = () => {
    try {
      const calculatedResult = eval(userInput); // Be cautious using eval!
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error'); // Display error in case of invalid expression
    }
  };

  // Clears the input and result
  const handleClear = () => {
    setUserInput('');
    setResult(null);
  };

  return (
    <div>
      <h2>Advanced Level Calculator</h2>

      {/* Display user input or result */}
      <input 
        type="text" 
        style={{ minHeight: "40px", minWidth: "300px" }} 
        value={result !== null ? result : userInput}
        
      />

      <div style={{ marginTop: "10px" }}>
        {/* Number buttons */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>
        ))}

        {/* Operator buttons */}
        {['+', '-', '*', '/', '%'].map((operator) => (
          <button key={operator} onClick={() => handleClick(operator)}>{operator}</button>
        ))}

        {/* Clear, Equal buttons */}
        <button onClick={handleClear}>C</button>
        <button onClick={handleEvaluate}>=</button>
      </div>
    </div>
  );
}


