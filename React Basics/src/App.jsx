import { useCallback, useEffect, useState } from "react";
import NewComponent from "./NewComponent";
// const username = "dilip";
function App() {
  const map = new Map();

  for (let i = 0; i < 10; i++) {
    map.set(i, i + 1);
  }

const Display = (() => {
    for( let [key,value] of map){
    console.log(map.get(key))
  }
});
const array=Array.from(map.entries());
const Display2= array.map(([num, value])=>{
  return(<p key={num}>{value}</p>)
})
  return (
    <>
      <button
        onClick={() => {
          Display()
        }}
      >
        {" "}
        click me
      </button>
      <br />
      <br />

     {Display2}
    </>
  );
}

export default App;
