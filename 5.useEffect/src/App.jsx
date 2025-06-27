import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("her zaman çalışır")
  }) 

  useEffect(() => {
    console.log("yalnızca bir kez çalışır")
  }, []) 

  useEffect(() => {
    console.log("ilk render ve firstName değişince çalışır")
  }, [firstName]) 

  useEffect(() => {
    console.log("ilk render ve lastName değişince çalışır")
  }, [lastName]) 

  return (
    <div>
      <div><button onClick={() => setFirstName("Enes")}>Adı Değiştir</button></div>
      <div><button onClick={() => setLastName("Bayram")}>Soyadı Değiştir</button></div>
    </div>
  )
}

export default App
