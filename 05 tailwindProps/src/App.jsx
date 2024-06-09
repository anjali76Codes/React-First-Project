import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'

function App() {

  let newObj = {
    name : 'Anjali' ,
    age : 21
  }

  let newArray = [1,2,3,4]

  return (
    <>
     <h1 className='bg-purple-400  text-black p-2 rounded - xl'>Tailwind Css React</h1><br/>

    <h2 className= 'bg-orange-500 text-black p-3  rounded -xl '>@Anjali Gupta</h2><br/>
   <Card Name='Anjali Gupta'/> <br></br>  
    <Card Name='Isha Singh'/>
    <Card Name='Savan' someObj={newObj}/>





    
  </>
  )
}

export default App
