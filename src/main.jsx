import './index.css'
import App from "./App.jsx"
import {createRoot} from "react-dom/client"

const root = createRoot(document.querySelector("#root"));

root.render(
  <App/>
)


/**
 * Extra credit ideas
 * 1. Add a timer and a roll counter to see how quickly you can win the game.
 * 2. Style the dice to look like a real dice with pips instead of numbers.
 * 3. Deploy your project live for others to enjoy.
 */