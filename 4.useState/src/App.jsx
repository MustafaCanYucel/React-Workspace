import { useState } from 'react'

import './App.css'

function App() {
  {/*const [firstname, setFirstname] = useState('Enes')*/}
  {/*const [names, setNames] = useState(["Enes", "Adem", "Yakup", "Ali"])*/}
  const [count, setCount] = useState(0);

  {/*const [userInfo, setUserInfo] = useState({username: "ebayram", password: "123"})*/}
  {/*const [show, setShow] = useState(true);
  console.log(names)*/}
  {/*const handleChange = ()=>{
    debugger;
    setFirstname("Ayşe")

  }*/}

const arttir = () => {
  setCount (count + 1)
}
const azalt = () => {
  if(count > 0){
  setCount (count - 1)
  }
}
  return (
    
      <div>
        {/*{show ? <div> {userInfo.username} {userInfo.password}</div> : <div>bilgileri gösterme</div>}
        <div>{firstname}</div>
       <div><button onClick ={handleChange}>İsmi değiştir</button> </div>*/}
       {/*{names.map((name, index)=>(
        <di key={index}>{name}</di>
       ))}*/}
       <div>{count}</div>
       <div><button onClick={arttir}>Artır</button></div>
       <div><button onClick={azalt}>Azalt</button></div>
       {/*butonlara her basıldığında sayfa render edilir bu useCallBack ile değiştirilebilir büyük fonksiyonlar için önemlidir çünkü her seferinde sayfayı render etmek ayrı bir maaliyettir. */}

      </div>
    
  )
}

export default App
