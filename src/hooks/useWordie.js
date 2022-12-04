import { useState } from 'react';

const useWordie = (solution) => {
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
  const handleKeyup = ({ key }) => {

    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1)
      })
      return
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key
        })
      }
    }
    
  }

  return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}
 
export default useWordie;