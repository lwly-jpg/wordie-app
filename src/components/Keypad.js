import React, {useState, useEffect } from 'react'

export default function Keypad() {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/letters')
      .then(res => res.json())
        .then(data => {
          setLetters(data)
        })
  }, [])
  return (
    <div className="keypad">
      {letters && letters.map((letter) => {
        return (
          <div key={letter.key}>{letter.key}</div>
        )
      })}
    </div>
  )
}