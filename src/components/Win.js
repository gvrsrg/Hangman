import React from 'react'
import BackButton from './BackButon'

export default function Win({gameScore, solution, letterStatus }) {


  return (
    <div>
        You WON!!!
        <BackButton gameScore={gameScore} solution={solution} letterStatus ={letterStatus}/>
    </div>
  )
}
