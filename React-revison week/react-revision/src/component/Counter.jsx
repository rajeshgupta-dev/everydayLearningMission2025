import React from 'react'
import { useState } from 'react'


const Counter = () => {
  const [count, setCount] = useState(0);


  function increament(){
    setCount((pre)=>pre+1);
  }
  function decreament(){
   
    setCount((pre)=>pre-1);
  }
  return (
    <>
    <div id='container'><h2>Count : {count}</h2>
      <button onClick={increament} >INC</button>
      <button onClick={decreament} disabled = {count <= 0}>DEC</button>
    </div>
    </>
  )
}

export default Counter