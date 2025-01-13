import {useState} from "react";
function UpdateArray(){
    const [food, setFood] = useState(["Apple", "Orange", "banana"]);

    function handleFoodItems () {
        const inputValue = document.getElementById('inputBox').value;
        document.getElementById('inputBox').value = "";
        setFood(prevfood => ([...prevfood, inputValue]))

    }
    function handleRemoveFood (index) {
        setFood(food.filter((_, i) => i !== index))  // This simply takes the index from handleRemoveFood and the callback function in the filter
        // checks if they are equal or not{means they are present in the list or not{during iteration}} which becomes true i{because iteration index) is equal to index(say orange)}
        // so remove that item and update the filtered array on the UI

    }
    
    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {food.map((food, index) => <li key = {index} onClick={() => handleRemoveFood(index)}>{food}</li>)} 
                {/* Callback function is invoked with an argument of index */}
            </ul>
            <input type="text" id="inputBox" placeholder="Enter Food name"/>
            <button id="addFood" onClick={handleFoodItems}>Add Food</button>

        </div>
    )

}
export default UpdateArray;