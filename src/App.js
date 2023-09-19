import logo from './logo.svg';
import './App.css';
import Score from './components/Score';
import { useState } from 'react';
import Solution from './components/Solution';
import Letters from './components/Letters';
import EndGame from './components/EndGame';


function App() {
  const[gameScore, setScore] = useState({score:100, gameState:"game"})
  //start
  //game
  //win
  //lost

  let word = "apple"
  let letters = ["a", "m"]
  let description = "Your ideal mood when coding."
  
  const generateLetterStatuses = function() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  let [letterStatus, setLetterStatus] = useState(generateLetterStatuses())


  let [solution, setSolution ] = useState({word:word, hint:description})

  const isWin = function(word, letterStatus) {
    let wordArray = word.split("")
    return wordArray.every((l) => letterStatus[l.toUpperCase()]) 
  }

  const isLost = function(gameScore) {
    return gameScore.score <= 0 
  }

  const isFinished = function() {
    return isWin(solution.word, letterStatus)||isLost(gameScore)
  }

  
  

  const selectLetter = function(letter){
    if (letterStatus[letter]) {
      return
    }
    let newLetterStatus = { ...letterStatus, [letter]: true }
    let newScore = gameScore.score
    let newGameState = gameScore.gameState
    let word = solution.word
    if (word.includes(letter.toLowerCase())){
      newScore += 5
    } else {
      newScore -= 20
    }
    if (newScore<=0) {
      newGameState = "lost"
    } else if (isWin(word, newLetterStatus)) {
      newGameState = "win"
    }



    setLetterStatus(newLetterStatus);    

    setScore({score:newScore, gameState:newGameState})

  }


  // if (gameScore.gameState == "start"){

  // } else if (gameScore.gameState == "game") {
  let endGame = isFinished()
  return (
    <div className="App">


      <Score gameScore={gameScore}/>
      <Solution solution={solution} letterStatus ={letterStatus}/>
      <Letters letterStatus={letterStatus} selectLetter={selectLetter}/>
      <EndGame isFinished={endGame} solution={solution} letterStatus ={letterStatus} selectLetter={selectLetter} gameScore={gameScore}/>
    </div>
  );
  // } else { 
  //   return (
  //     <div className="App">
        
  //     </div>
  //   )
  // }
}

export default App;
