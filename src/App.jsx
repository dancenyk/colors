import { useState, useRef, useEffect } from 'react';
import './App.css'

function App() {
  const inputRef = useRef(null)
  const [input, setInput] = useState("")
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];



  useEffect(()=>{
    inputRef.current.focus()
  }, [])
  
  const handleChange = () =>{
    setInput(inputRef.current.value)
  }

  const boxStyle = (color) =>{
    return color === input ? color :""
    
  }

  const changeText = (color) =>{
    const text = color  === input ? ` Soy  el color  ${input} `: `No soy el color ${input}`
    return <span style={{color: color === input ? "black" : color}}>{text}</span>

  }

  return (
    <>
    <input 
    type="text"
    placeholder='escribe un color'
    value={input}
    onChange={handleChange}
    ref={inputRef}
    />

    <div className='container'>
      {colors.map(color => <div style ={{borderColor: color, backgroundColor: boxStyle(color)}}className="box" key={color} >{changeText(color)}</div> )}
    </div>
    </>
  )
}

export default App
