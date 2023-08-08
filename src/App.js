import logo from './logo.svg';
import './App.css';
import Score from './components/Score';
import { useState } from 'react';
import Solution from './components/Solution';
import Letters from './components/Letters';

function App() {
  const[score, SetScore] = useState(100)

  let word = "calm"
  let letters = ["a", "m"]
  let description = "Your ideal mood when coding."
  
  const generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  let [letterStatus, setLetterStatus] = useState(generateLetterStatuses())

  let [solution, setsolution ] = useState({word:word, hint:description})





  return (
    <div className="App">

      <Score score={score}/>
      <Solution solution={solution} letterStatus ={letterStatus}/>
      <Letters letterStatus={letterStatus} />
    </div>
  );
}

export default App;
