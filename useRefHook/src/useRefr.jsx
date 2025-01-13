import {useState, useEffect, useRef} from 'react'

const UseRefr = () => {
    const inputRef = useRef(0);
    function handleCount() {
      inputRef.current.focus();
      inputRef.current.style.borderColor = "red";

        
    }
    useEffect( () => {
      console.log("Redering")
    })
  return (
    <>
    <button onClick = {handleCount}>Ref</button>
    <input  ref = {inputRef} type="text" />

    
    </>
  )
}

export default UseRefr