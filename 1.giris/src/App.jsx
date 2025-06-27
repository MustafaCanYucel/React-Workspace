import { useRef } from "react"

function App() {
  const inputRef = useRef();
  const focusfunc = () => {
inputRef.current.focus()  }
  return (
    <>
    <input type="text" ref={inputRef}/>
    <button onClick={focusfunc}>
      focus!!!
      </button>
    </>
  )
}


export default App