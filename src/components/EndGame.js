import React from 'react'
import Win from './Win'
import Lost from './Lost'

export default function EndGame({isFinished, gameScore, solution, letterStatus}) {
    if (isFinished) {
  return (
    <div>
        {gameScore.gameState==="win"? <Win gameScore={gameScore} solution={solution} letterStatus ={letterStatus}/> : <Lost gameScore={gameScore} solution={solution} letterStatus ={letterStatus}/>}
    </div>
  )} else {
    return (<div></div>)
  }
}
