import { useState } from "react";
function counter(){
    const[Count ,setCount]=useState(0);
    return (
        <button onClick={ ()=>setCount(count +1)}>clicked {count} times</button>
    )
}