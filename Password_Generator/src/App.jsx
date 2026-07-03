import { useCallback, useState, useEffect } from 'react'

import './App.css'

function App() {
  const [password, setpassword] = useState("")
  const[numberAllowed, setNumberAllowed]=useState(false)
  const[characterAllowed, setcharacterAllowed]=useState(false)
  const[length,setLength]=useState(8);
 const passwordGenerator=useCallback(()=> {
      let pass=""
      let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed){
        string+="1234567890"
      }
      if(characterAllowed){
        string+="!@#$%^&*()?"
      }
      for(let i=1;i<=length;i++){
       const index = Math.floor(Math.random() * string.length)
        pass+=string.charAt(index)
      }
      setpassword(pass)
    },[length,numberAllowed,characterAllowed]);
  useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, characterAllowed])
  return (
    <>
      <h1 className='text-5xl text-center'>Password Generator</h1>
      <br />
      <div className='w-200 h-30 bg-white ml-60 rounded-4xl  p-7 text-black items-center'>
       <div className='flex'>
         <div className=''>
          <input type="text" 
        value={password}
        readOnly
        /></div>
        <button className='bg-blue-600'>Copy</button>
          </div>
          <br />
          <div className='flex gap-10'>
            <div>
              <input type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(Number(e.target.value))}}
             />
             <label>length:{length}</label>
              </div>
             
            <div>
               <input type="checkbox" 
             checked={numberAllowed}
             id='numberInput'
             onChange={()=>{
              setNumberAllowed((prev) => !prev)
             }}/>
             <label >Numbers</label></div>
             <div>
              <input type="checkbox" 
             checked={characterAllowed}
             id='characterInput'
             onChange={()=>{
              setcharacterAllowed((prev) => !(prev))
             }}/>
             <label >Characters</label>
             </div>
          </div>
      </div>
    </>
  )
}

export default App
