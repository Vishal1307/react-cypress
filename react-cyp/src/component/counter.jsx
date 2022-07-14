import { useState } from "react"

export const Counter=()=>{
    const [count,setCount]=useState(0)
    const handleButton=(val)=>{
        setCount((prev)=>prev+val)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button className="inc_count" onClick={()=>handleButton(1)}>increment</button>
            <button className="dec_count" onClick={()=>handleButton(-1)}>decrement</button>

        </div>
    )
}