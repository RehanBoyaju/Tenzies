import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dice from "./Components/Dice"


export default function App() {
  const [dice, setDice] = React.useState([])



  React.useEffect(() => {
    let rnds = [];
    for (let i = 0; i < 10; i++) {
      rnds[i] = Math.ceil(Math.random() * 6);
    }

    setDice(rnds);
  }, [])



  return (
    <main>
      <div className="diceContainer">
        {
          dice.map((die, index) => (
            <Dice key={index} value={die} />
          ))
        }
      </div>
    </main>
  )
}
