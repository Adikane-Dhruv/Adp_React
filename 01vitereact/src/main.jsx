import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'


function MyApp()
{
  return (
    <div>
      <h1>Custom App!!!!</h1>
    </div>
  )
}


const anotherElement=(
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser="ADP AND AKP"

const reactElement=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click here',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //<App />
  // </React.StrictMode>,

  //<MyApp />
  //anotherElement
  // MyApp()
  reactElement
)
