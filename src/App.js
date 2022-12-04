import { useState, useEffect } from "react";
import Wordie from './components/Wordie';

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
        .then(json => {
          const randomSolution = json[Math.floor(Math.random() * json.length)]
          setSolution(randomSolution.word)
        })
  }, [setSolution])

  return (
    <div className="App">
      <h1>Wordie</h1>
      {solution && <Wordie solution={solution} />}
    </div>
  );
}

export default App;
