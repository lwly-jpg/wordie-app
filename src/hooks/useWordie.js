import { useState } from 'react';

const useWordie = (solution) => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)])
  const [history, setHistory] = useState([])
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedKeys, setUsedKeys] = useState({})

  // turn guess into array of objects
  const formatGuess = () => {
    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess].map((letter) => {
      return {key: letter, colour: 'grey'}
    })

    // green letters
    formattedGuess.forEach((letter, index) => {
      if (solutionArray[index] === letter.key) {
        formattedGuess[index].colour = 'green'
        solutionArray[index] = null
      }
    })
    
    // yellow letters
    formattedGuess.forEach((letter, index) => {
      if (solutionArray.includes(letter.key) && letter.colour !== 'green') {
        formattedGuess[index].colour = 'yellow'
        solutionArray[solutionArray.indexOf(letter.key)] = null
      }
    })

    return formattedGuess
  }

  // handle new guess
  const addNewGuess = (formattedGuess) => {
    // winning condition
    if (currentGuess === solution) {
      setIsCorrect(true)
    }

    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })

    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess]
    })

    setTurn((prevTurn) => {
      return prevTurn + 1
    })

    setUsedKeys((prevUsedKeys) => {
      let newKeys = {...prevUsedKeys}
      formattedGuess.forEach((letter) => {
        const currentColour = newKeys[letter.key]

        if (letter.colour === 'green') {
          newKeys[letter.key] = 'green'
          return
        } else if (letter.colour === 'yellow' && currentColour !== 'green') {
          newKeys[letter.key] = 'yellow'
          return
        } else if (letter.colour === 'grey' && currentColour !== 'green' && currentColour !== 'yellow') {
          newKeys[letter.key] = 'grey'
          return
        }
      })
      return newKeys
    })

    setCurrentGuess('')
  }

  // handle keyup event and track current guess
  const handleKeyup = ({ key }) => {
    if (key === 'Enter') {
      if (turn > 5) {
        console.log('All guesses used')
        return
      }
      if (history.includes(currentGuess)) {
        console.log('Word matches previous guess')
        return
      }
      if (currentGuess.length !== 5) {
        console.log('Word needs to be 5 letters long')
        return
      }

      const formatted = formatGuess();
      addNewGuess(formatted);
    }

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

  return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup}

}
 
export default useWordie;