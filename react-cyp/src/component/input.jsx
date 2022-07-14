import { useState } from "react"

export const Input=()=>{
    const [text,setText]=useState("")
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    console.log(text)

    return (
        <div>
            <input type="text" name="" id="" onChange={(e)=>handleChange(e)} />
            <span>{text}</span>
    
        </div>
    )
}