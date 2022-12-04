import React, {useState, useEffect } from 'react'

export default function Keypad({ usedKeys }) {
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
        const colour = usedKeys[letter.key]
        return (
          <div key={letter.key} className={colour}>{letter.key}</div>
        )
      })}
    </div>
  )
}