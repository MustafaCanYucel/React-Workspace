import { useState } from 'react'

function App() {
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);

  const ortalamaBul = () => {
    debugger
    const toplamSonuc = topla() / 2;
    yazdır(toplamSonuc);
  }

  const topla = () => {

    const toplam = vize1 + vize2;
    debugger
    return toplam;
  }

  const yazdır = (sonuc) => {
    debugger
    console.log("Ortalama: " + sonuc);
  }

  return (
    <div>
      <div>
        <input
          type="number"
          onChange={(e) => setVize1(Number(e.target.value))}
          placeholder="Vize 1"
        />
      </div>

      <div>
        <input
          type="number"
          onChange={(e) => setVize2(Number(e.target.value))}
          placeholder="Vize 2"
        />
      </div>

      <div>
        <button onClick={ortalamaBul}>Ortalama Bul</button>
      </div>
    </div>
  );
}

export default App
