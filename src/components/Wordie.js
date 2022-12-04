import React, { useEffect } from "react";
import useWordie from "../hooks/useWordie";

export default function Wordie ({ solution }) {
  const { currentGuess, handleKeyup } = useWordie(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  return ( 
    <div>
      <div>Solution: {solution}</div>
      <div>Current guess: {currentGuess}</div>
    </div>
    
  );
}

