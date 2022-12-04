import React from 'react'

export default function Modal ({ isCorrect, turn, solution}) {
  return ( 
    <div className="modal">
      {isCorrect && (
        <div>
          <h2>You win!</h2>
          <p className="solution">{solution}</p>
          <p>Today's Wordie guessed in {turn} guesses.</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h2>Better luck next time!</h2>
          <p className="solution">{solution}</p>
          <p>Oops - you ran out of guesses...</p>
        </div>
      )}
    </div>
   )
}

