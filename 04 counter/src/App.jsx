import React from 'react'
import { useState } from 'react'



// let counter = 10



function App() {

  let [counter , setCounter] = useState(10)


  const addValue = ()=> {
  // console.log("Add value clicked" , Math.random())
  console.log("Add value clicked" , counter)
  counter += 1
  setCounter(counter)
  
  }


  const removeValue = ()=> {
    // console.log("Add value clicked" , Math.random())
    console.log("Add value clicked" , counter)
    if(counter >0 ){
      counter -= 1
      // counter -= counter
      setCounter(counter)
    }

    
    }


  return (
    <>
    <h1>React Course</h1>
    <h3>Counter value :{counter}</h3>
  <button onClick={addValue}>Add Value </button><br/>
  <h3>Added value : {counter}</h3>
  <br/>
  <button  onClick={removeValue}>Remove value : {counter} </button>
    </>
  )
}

export default App