import { useCallback, useState } from "react"
import Header from "./header";

const App = () => {
  const [counter, setCounter] = useState(0);

  const newFn = useCallback(() => {}, [])
  return (
    <div>
      <Header newFn = {newFn}/>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(c => c + 1)}>+</button>

    </div>
  )
}

export default App