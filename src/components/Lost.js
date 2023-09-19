import React from 'react'
import BackButton from './BackButon'

export default function Lost({gameScore, solution, letterStatus }) {


  return (
    <div>
        You LOST!!!
        <BackButton gameScore={gameScore} solution={solution} letterStatus ={letterStatus}/>
    </div>
  )
}
