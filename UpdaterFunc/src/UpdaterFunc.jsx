import {useState} from 'react';
function UpdaterFunc() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(c => c + 1)
        
    }
    const decrement = () => {
        setCount(c => c - 1)

    }
    const reset = () => {
        setCount(0)
    }

    return(
        <div className="container">
            <b>{count}</b>
            <button onClick = {decrement}>Decrement</button>
            <button onClick = {reset}>Reset</button>
            <button onClick = {increment}>Increment</button>
            
        </div>
    );


}
export default UpdaterFunc;