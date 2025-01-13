import { useMemo, useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  function handleCubeNumber(n) {
    console.log("Checking re-renders");
    return Math.pow(n, 3);
  }
  const result = useMemo(() => handleCubeNumber(number), [number]);
  return (
    <div className="container">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}/>
      <p>The Cube of number is : {result}</p>

      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <p>Current Counter value : {counter}</p>
    </div>
  );
};

export default App;
