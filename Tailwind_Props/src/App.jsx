import { useState } from 'react'
import Card3 from './Props/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=" bg-green-400 text-3xl font-bold underline text-red-700">
      Hello world!
    </h1>   
    <Card3 feeling="Happy" />
     </>
  )
}

export default App
