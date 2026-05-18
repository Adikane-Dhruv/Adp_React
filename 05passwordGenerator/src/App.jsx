import { useState, useCallback, useEffect, useRef} from 'react'

//import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [length,setLength]=useState(8)
  const [numAllowed,setNumAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [pwd,setPwd]=useState("")

  //useRef hook

  const pwdRef=useRef(null)



  const pwdGenerator = useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if(numAllowed) str+="1234567890"
    if(charAllowed) str+="!@#$%^&*()_+"

    for (let i = 1; i <= length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPwd(pass)
    


  }, [length,numAllowed,charAllowed])

  const copyPasswordToClipboard=useCallback(()=>{

    pwdRef.current?.select();
    pwdRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(pwd)
  },[pwd])

  useEffect(()=>{
    pwdGenerator()
  },[length,numAllowed,charAllowed,pwdGenerator])
  return (
    <>
  
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
    <h1 className='text-white text-center'>Password Generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input 
      type="text"
      value={pwd}
      className="outline-none w-full py-1 px-3"
      placeholder='password'
      readOnly
      ref={pwdRef}
      />

      <button 
      onClick={copyPasswordToClipboard}
      className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
     </div>
     <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input 
        type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{
          setLength(e.target.value)
        }}

        />
        <label>length:{length}</label>
     </div>
        <div className="flex items-center gap-x-1">
        <input type="checkbox" 
                defaultChecked={numAllowed}
                id="numberInput"
                onChange={()=>{
                  setNumAllowed((prev)=>!prev)
                }}
        />
        <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
        <input type="checkbox" 
                defaultChecked={charAllowed}
                id="charInput"
                onChange={()=>{
                  setCharAllowed((prev)=>!prev)
                }}
        />
        <label htmlFor='charInput'>Characters</label>
        </div>
     </div>
     </div>
     </> 
  )
}
export default App


// function App() {
//   return (
//     <h1 className="text-5xl font-bold text-blue-500">
//       Tailwind v4 Working 🚀
//     </h1>
//   )
// }

// export default App