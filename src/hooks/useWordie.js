import { useState } from 'react';

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([])
  const [history, setHistory] = useState([])
  const [isCorrect, setIsCorrect] = useState(false)

  // turn guess into array of objects
  const formatGuess = () => {

  }

  // handle new guess
  const addNewGuess = () => {

  }

  // handle keyup event and track current guess
  const handleKeyup = () => {
    
  }

  return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}
 
export default useWordle;