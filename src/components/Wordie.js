import React, { useEffect } from "react";
import useWordie from "../hooks/useWordie";
import Grid from './Grid'
import Keypad from "./Keypad";

export default function Wordie ({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordie(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      console.log('congrats!')
      window.removeEventListener('keyup', handleKeyup)
    }

    if (turn > 5) {
      console.log('out of guesses')
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  return ( 
    <div>
      <div>Solution: {solution}</div>
      <div>Current guess: {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      <Keypad usedKeys={usedKeys} />
    </div>
    
  );
}

