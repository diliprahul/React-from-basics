// import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'


// let's write app component here and check how it is gonna work
// function App(){
//   return(
//     <h1>React Vite</h1>
//   )
// }


const randomElement="react random"
const firstelement=(
  <img src="https://i.pinimg.com/736x/2c/85/f3/2c85f3cd66f8d3d7fcb93e6da8eee08c.jpg" alt="text"></img>
)

const secondelement=React.createElement(
  "a",
  {
    href:"https://www.google.com" , target:"_blank"
  },
  "click here to redirect",
  randomElement
  
)

createRoot(document.getElementById('root')).render(

    <App />
    //secondelement
)
