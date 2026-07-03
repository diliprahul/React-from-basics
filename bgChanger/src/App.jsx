import { useState } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div
    className='h-155 w-100% bg-black  flex items-center'
    style={{backgroundColor:color}}>
      <div className='flex flex-wrap w-200 h-20 bg-white items-center-safe mt-60 ml-70 rounded-4xl gap-15 pl-25 text-black'>
        <button className='bg-red-600 rounded-4xl p-2'
        onClick={()=>{
          setColor("red")
        }}>Red

        </button>
         <button className='bg-green-600 rounded-4xl p-2'
         onClick={()=>{
          setColor("green")
        }}>Green

        </button>
         <button className='bg-blue-600 rounded-4xl p-2'
         onClick={()=>{
          setColor("blue")
        }}>Blue

        </button>
         <button className='bg-yellow-600 rounded-4xl p-2'
         onClick={()=>{
          setColor("yellow")
        }}>Yellow

        </button>
         <button className='bg-fuchsia-800 rounded-4xl p-2'
         onClick={()=>{
          setColor("fuchsia")
        }}>Fuchsia

        </button>
      </div>
    </div>
    </>
  )
}

export default App
