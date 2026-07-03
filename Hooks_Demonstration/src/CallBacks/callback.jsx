import {useState, useCallback} from "react";

function Callback(){
    //const [length, setLength]=useState(100);


// const demo= useCallback(()=>{
//     setLength(length-1)
// },[length])


// const demo1=()=>{
//     setLength(length-1)
// }
const [length, setLength] = useState(10);
const [theme, setTheme] = useState("dark");

const demo = useCallback(() => {
    console.log(length);
}, [length]);

return(
   <>

   <div className="text-black w-100% h-154 bg-white">
     <h1>{length}</h1>
    <button onClick={demo}
    className="border-2 bg-gray-400">click to see length</button>
   </div>
   </>
)
}

export default Callback;