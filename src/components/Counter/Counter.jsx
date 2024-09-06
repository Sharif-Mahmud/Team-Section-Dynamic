import { useState } from "react";
import "./Counter.css";
const Counter = () => {

  const [count, setCount] = useState(0);
  const [input, setInput]  = useState("");
  const handleCounterInc = () => {
      setCount((prevState)=>{
        return prevState + 1;
      });
  }
  const handleCountDec = () =>{
    setCount((prevState) =>{
      return prevState - 1;
    });
  }

  const handleCountReset = ()=>{
    setCount(0);
  }

const handleCountSet = ()=>{
  if(input){
    setCount(input);
    setInput("");
  }else{
    alert("Set the value first");
  }
}

const handleInputChange = (e) => {
  setInput(e.target.value);
}

  return (
    <>
        <div className="counter">
            <h1>Counter</h1>
            <h1>{count}</h1>
            <hr />
            <button onClick={handleCountDec}>--</button>
            <button onClick={handleCounterInc}>++</button>
            <button onClick={handleCountSet}>SET</button>
            <button onClick={handleCountReset}>RESET</button>
            <br />
            <br />
            <input type="text" value={input} onChange={handleInputChange} />
        </div>
    </>
  )
}

export default Counter;