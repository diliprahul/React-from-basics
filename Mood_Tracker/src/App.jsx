// import { useState, useEffect, useCallback } from "react";

// function App() {
//   // Mood Buttons
//   const moods = [
//     { id: 1, emoji: "😊", name: "Happy" },
//     { id: 2, emoji: "😐", name: "Neutral" },
//     { id: 3, emoji: "😢", name: "Sad" },
//     { id: 4, emoji: "😴", name: "Tired" },
//     { id: 5, emoji: "🤩", name: "Excited" },
//   ];

//   // States
//   const [selectedMood, setSelectedMood] = useState("");
//   const [reason, setReason] = useState("");
//   const [history, setHistory] = useState([]);

//   // Save Mood
//   const saveMood = useCallback(() => {
//     if (selectedMood === "" || reason.trim() === "") return;

//     const newEntry = {
//       id: Date.now(),
//       mood: selectedMood,
//       reason: reason,
//       time: new Date().toLocaleTimeString(),
//     };

//     setHistory([...history, newEntry]);
//     setReason("");
//     setSelectedMood("");
//   }, [selectedMood, reason, history]);

//   // Delete Mood
//   const deleteMood = useCallback(
//     (id) => {
//       const newHistory = history.filter((item) => item.id !== id);
//       setHistory(newHistory);
//     },
//     [history]
//   );

//   // Runs whenever history changes
//   useEffect(() => {
//     console.log("Mood History Updated");
//     console.log(history);
//   }, [history]);

//   // Count Moods
//   const moodCount = {
//     Happy: 0,
//     Neutral: 0,
//     Sad: 0,
//     Tired: 0,
//     Excited: 0,
//   };

//   history.forEach((item) => {
//     moodCount[item.mood.name]++;
//   });

//  return (
//   <div className="min-h-screen bg-gray-100 p-8">
//     {/* Heading */}
//     <h1 className="text-4xl font-bold text-center mb-8">
//       😊 Mood Tracker
//     </h1>

//     {/* Mood Buttons */}
//     <div className="flex justify-evenly bg-white border rounded-lg p-4 shadow-sm mb-6">
//       {moods.map((mood) => (
//         <button
//           key={mood.id}
//           onClick={() => setSelectedMood(mood)}
//           className={`px-5 py-2 rounded-md border transition
//             ${
//               selectedMood?.id === mood.id
//                 ? "bg-blue-500 text-white border-blue-500"
//                 : "bg-white hover:bg-gray-100"
//             }`}
//         >
//           {mood.emoji} {mood.name}
//         </button>
//       ))}
//     </div>

//     {/* Reason Input */}
//     <div className="bg-white rounded-lg border shadow-sm p-5">
//       <input
//         type="text"
//         placeholder="Why are you feeling this way?"
//         value={reason}
//         onChange={(e) => setReason(e.target.value)}
//         className="w-full border rounded-md p-3 outline-none focus:border-blue-500"
//       />

//       <button
//         onClick={saveMood}
//         className="mt-4 w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
//       >
//         Save Mood
//       </button>
//     </div>

//     {/* History */}
//     <h2 className="text-2xl font-semibold mt-8 mb-4">
//       Mood History
//     </h2>

//     <div className="space-y-4">
//       {history.map((item) => (
//         <div
//           key={item.id}
//           className="bg-white border rounded-lg p-5 shadow-sm"
//         >
//           <h3 className="text-xl font-semibold">
//             {item.mood.emoji} {item.mood.name}
//           </h3>

//           <p className="mt-2">
//             <span className="font-semibold">Reason:</span>{" "}
//             {item.reason}
//           </p>

//           <p className="text-gray-500 text-sm mt-1">
//             {item.time}
//           </p>

//           <button
//             onClick={() => deleteMood(item.id)}
//             className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>

//     {/* Summary */}
//     <div className="bg-white border rounded-lg p-5 shadow-sm mt-8">
//       <h2 className="text-2xl font-semibold mb-4">
//         Today's Summary
//       </h2>

//       <div className="grid grid-cols-2 gap-3">
//         <p>😊 Happy: {moodCount.Happy}</p>
//         <p>😐 Neutral: {moodCount.Neutral}</p>
//         <p>😢 Sad: {moodCount.Sad}</p>
//         <p>😴 Tired: {moodCount.Tired}</p>
//         <p>🤩 Excited: {moodCount.Excited}</p>
//       </div>
//     </div>
//   </div>
// );
// }

// export default App;

















import { useState } from "react";
import "./App.css";

function App() {

  const [mode, setMode] = useState([]);
  const [input, setinput]= useState("");
 // const [iscrctinput, setiscrctinput]=useState([])
 let id=0;
  const addcard = (presentmode) => {
    if(presentmode == "Happy"){
      id=1
    }
    else if(presentmode == "Neutral"){
      id=2
    }
    else if(presentmode == "Sad"){
      id=3
    }
    else if(presentmode == "Tired"){
      id=4
    }
    else if(presentmode == "Excited"){
      id=5
    }
    setMode([...mode, {modeid : id,
      modenow:presentmode,
      reason:input
    }])
  };
   const handlesubmit=(e)=>{
    e.preventDefault()
   if(input.trim() !== "" || input !== ""){
     addcard
   }
  }
  const Display = ()=>{
   return(
     mode.map( (mode) =>{
      
        return(
          <><div key={mode.modeid}>
            <p>{mode.modenow}</p>
        <p> {mode.reason} </p>
        </div></>
        )
      
    })
   )
  }

  return (
    <>
      <div className=" bg-white w-full h-154 text-black">
        <h1 className="text-5xl text-center">Mood Tracker</h1>
        <div className="w-screen flex gap10 justify-evenly items-center py-">
          <button
            onClick={()=>{
              addcard("Happy")
            }}
            className="border-0 rounded-4xl bg-amber-400 p-2"
          >
            Happy
          </button>
           <button
            onClick={()=>{
              addcard("Neutral")
            }}
            className="border-0 rounded-4xl bg-amber-400 p-2"
          >
            Neutral
          </button>
          <button
            onClick={()=>{
              addcard("Sad")
            }}
            className="border-0 rounded-4xl bg-amber-400 p-2"
          >
            Sad
          </button>
          <button
            onClick={()=>{
              addcard("Tired")
            }}
            className="border-0 rounded-4xl bg-amber-400 p-2"
          >
            Tired
          </button>

          <button
            onClick={()=>{
              addcard("Excited")
            }}
            className="border-0 rounded-4xl bg-amber-400 p-2"
          >
            Excited
          </button>
        
         </div>
        <form onSubmit={handlesubmit}>
          <input type="text"
          className="border-2 ml-10 mt-3 w-3xl"
          placeholder="Enter reason" 
          value={input}
          onChange={(e) => {
            setinput(e.target.value);

          }}/>
        </form>
      </div>
      <Display/> 
    </>
  );
}

export default App;
