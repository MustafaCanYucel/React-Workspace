import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import {users } from './Login'
import Hello from './Hello'

function App() {
  const [count, setCount] = useState(0)
  console.log(users)

  return (
    <>
     <div>Mustafa</div>
     <Login />
     <hr />
     <Login />
    <Hello />
    </>
  )
}

export default App
