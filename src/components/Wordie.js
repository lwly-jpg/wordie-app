import React, { useEffect } from "react";
import useWordie from "../hooks/useWordie";
import Grid from './Grid'
import Keypad from "./Keypad";

export default function Wordie ({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordie(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return ( 
    <div>
      <div>Solution: {solution}</div>
      <div>Current guess: {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      <Keypad usedKeys={usedKeys} />
    </div>
    
  );
}

