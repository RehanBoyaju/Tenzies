import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from "./Components/Die"
import { nanoid } from "nanoid"
import Confetti from "./Components/Confetti"

export default function App() {
  const [dice, setDice] = React.useState(() => generateNewDice())

  const buttonRef = React.useRef(null);

  const allHeld = dice.every(die=>die.isHeld)
  const allSameValue = dice.every(die => dice[0].value === die.value)
  const gameWon = allHeld && allSameValue;

  React.useEffect(()=>{
    if(gameWon){
      buttonRef.current.focus();
    }
  },[gameWon])

  
  // if(allHeld){
  //   if(allSameValue){  

  //     console.log("Congrats you have won the game")
  //   }
  //   else{
  //     console.log("Some tenzies are different")
  //   }
  // }
  // const [diceHeld, setDiceHeld] = React.useState(0);

  // React.useEffect(() => {
  //   console.log(diceHeld)

  //   if (diceHeld === 10) {
  //     const value = dice[0].value;

  //     for (let i = 1; i < 10; i++) {
  //       if (value !== dice[i].value) {
  //         console.log("All dices aren't the same.")
  //         return;
  //       }
  //     }
  //     console.log("Congrats you won the game");
  //   }
  // }, [diceHeld])


  function generateNewDice() {
    // let rnds = [];
    // for (let i = 0; i < 10; i++) {
    //   rnds.push({
    //     value:Math.ceil(Math.random() * 6),
    //     isHeld:false
    //   }
    //   );
    // }
    // return rnds;

    //Or do

    return new Array(10)
      .fill(0)
      .map(() => (
        {
          id: nanoid(),
          value: Math.ceil(Math.random() * 6),
          isHeld: false
        }))
  }

  function hold(id) {
    setDice(prevDice => {

      return prevDice.map(prevDie => {
        if (prevDie.id === id) {
          return { ...prevDie, isHeld: !prevDie.isHeld }
        }
        return prevDie

      })
    }
    )
  }


  function rollDice() {
    if(gameWon){
      setDice(generateNewDice);
      return;
    }
    setDice(prevDice =>
      prevDice.map(prevDie =>

        prevDie.isHeld ?
          prevDie :
          { ...prevDie, value: Math.ceil(Math.random() * 6) }

      )
    )
  }

  return (
    <main>
      {gameWon && <Confetti/>}

      <div aria-live="polite" className="sr-only">
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again</p>}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

      <div className="diceContainer">
        {

          dice.map((die, index) => (
            <Die key={die.id} die={die} hold={() => (hold(die.id))} />
          ))
        }

      </div>

      <button onClick={rollDice} className="roll-dice" ref={buttonRef}>
        {gameWon?"New Game":"Roll"}
      </button>


    </main>
  )
}
