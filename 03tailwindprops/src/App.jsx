import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

// export default App


function App() {
  const [count, setCount] = useState(0)
  let myObj={
    uname:"adp",
    age:22
  }
  let newArray=[1,2,3,4,5]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-6">
        Tailwind is Working 🚀
      </h1>
      <Card uname="ADP" btnText="click" />
      <Card uname="REACTTTTT" btnText="vISIt"/>
      
    </>
  )
}

export default App