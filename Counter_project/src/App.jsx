import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increase=()=>{
    setCount(count+1)
  }
  const decrease=()=>{
    if(count>=1){
      setCount(count-1)
    }
  }
  return (
    <>
     <h1>Counter project </h1>
     <h2> click to increase ans decrease count</h2>
     <h1>Count is {count}</h1>
     <button 
     onClick={increase}>Increase</button>
     <button
     onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
