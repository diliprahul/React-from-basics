import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [quotes, setquotes] = useState([]);
  const [input, setinput] = useState("");
  let isexisted = false;
  const handlesubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      for (const element of quotes) {
        if (input.trim() === element) {
          isexisted = true;
        }
      }
    }
    if (!isexisted) {
      setquotes([...quotes, input]);
    }
    setinput("");
  };

  const Display = () => {
    return quotes.map((Object, index) => {
      return (
        <>
        <div key={index}
          className="pl-5 ml-6 mt-2 pb-4 mb-2 border-1 border-t-3 w-150 bg-red-300">
            <p>{Object}</p>
            <p>{index+1}</p>
            <button onClick={()=>{deletequote(index)}}
              className="border-2 ">Delete</button>
          </div>
        </>
      );
    });
  };
    const deletequote = useCallback((index) => {
    const newarray=[...quotes]
        newarray.splice(index,1)
        setquotes(newarray)
    },
    [ quotes],
  );
 const effect= useEffect(() => {
  console.log("Quote Manager Started");
}, [quotes]);

  return (
    <>
     <div className="w-100% h-154 bg-blue-400 text-black">        
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
          className="border-2 mt-7 ml-5 w-150"
        />
        <label> : Quote please</label>
      </form>
      <Display />
      </div>
    </>
  );
}

export default App;
