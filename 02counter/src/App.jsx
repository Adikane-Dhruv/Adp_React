import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  //let counter=15

  const addValue=()=>{
    //console.log("Value Added!!!",Math.random());
    //counter=counter+1
    //console.log("Clicked!!!",Math.random())
    console.log("Counter is: ",counter)
    setCounter(counter+1)
    // setcounter( (prevCounter)=>prevCounter+1 )
    // setcounter( (prevCounter)=>prevCounter+1 )
    // setcounter( (prevCounter)=>prevCounter+1 )
    // setcounter( (prevCounter)=>prevCounter+1 )
    if(counter>=20)
    {
      setCounter(19);
    }
  }

  const removeValue=()=>{
    setCounter(counter-1)
    if(counter<=0)
    {
      setCounter(1)
    }
    console.log("Counter is: ",counter)
  }
  return (
    <>
     <h1>Adp with React JS!!! {counter}</h1>
     <h2>Counter Value: {counter}</h2>

    <button
    onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove</button>
    </>
  )
}

export default App
