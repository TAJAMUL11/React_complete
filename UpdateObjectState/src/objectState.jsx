import {useState} from 'react';
function ObjectState(){
    const [car, setCar] = useState({
                maker : "Toyota",
                model : "Fortuner",
                year : 2024,
    });
    function handleYearChange(e) {
        setCar(c => ({
            ...c, year : e.target.value  // shallow copy of current state{object: car };
        }))

    }
    function handleMakerChange(e) {
        setCar(c => ({
            ...c, maker : e.target.value
        }))

    }
    function handleModelChange(e) {
        setCar(c => ({
            ...c, model : e.target.value
        }))

    }

    return(
        <div className="container">
            <p>Your fav car is : {car.year} {car.maker} {car.model}</p>
            <div className="inputCon">
                <input type="number"  value={car.year} onChange={handleYearChange}/><br />
                <input type="text"  value={car.maker} onChange={handleMakerChange}/> <br />
                <input type="text"  value={car.model} onChange={handleModelChange}/>

            </div>

        </div>
    );

}
export default ObjectState;