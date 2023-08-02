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


  return (
    <div className="App">

      <Score score={score}/>
      <Solution word={word} letters={letters} description={description}/>
      <Letters letters={letters} />
    </div>
  );
}

export default App;
