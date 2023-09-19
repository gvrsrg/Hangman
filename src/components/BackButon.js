import React from 'react'
export default function BackButton({gameScore, solution, letterStatus }) {
    let newGameScore = {...gameScore}
    newGameScore.score = 100
    newGameScore.gameState = "game"
    



  return (

    <div>   
        <button></button>
    </div>
  )
}
