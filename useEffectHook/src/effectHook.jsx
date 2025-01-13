import {useState, useEffect} from 'react';
function EffectHook () {
    const [count, setCount] = useState(0);
    const [color , setColor] = useState("red");

    useEffect( () => {
        document.title = `Count : ${color} ${count}`;
        return () => {
            
        }
    },[count, color]);

    function addCount () {
        setCount(c => c + 1);
    }
    function changeColor (){
        setColor(c => c === "red" ? "green": "red")
    }


return (
    <>
        <p style={{color : color, fontSize : '5rem'}}>{count}</p>
        <button onClick={addCount}>Add</button> <br />
        <button onClick={changeColor}>Change Color</button>

    </>
)

}

export default EffectHook;