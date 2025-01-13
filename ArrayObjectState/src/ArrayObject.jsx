import {useState} from 'react'

function ArrayObject () {
    const [cars, setCar] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carModel, setCarModel] = useState('')
    const [carMaker, setCarMaker] = useState('')

    function handleAddCar () {
        const newCar = {
            year : carYear,
            model : carModel,
            maker : carMaker
        }
        setCar(prevCars => [...prevCars , newCar])
        setCarYear(new Date().getFullYear());
        setCarModel("")
        setCarMaker("")

        
    }
    function handleRemoveCar (index) {
        setCar(cars.filter((_, i) => i !== index))

    }
    function handleYearCar (e) {
        setCarYear(e.target.value)

    }
    function handleModelCar (e) {
        setCarModel(e.target.value)
    }
    function handleMakerCar (e) {
        setCarMaker(e.target.value)

    }

    return (

        <div>
            <h2>List of Cars</h2>
            <ul>
                {
                    cars.map((car, index) => 
                    <li key = {index} onClick={() => handleRemoveCar(index)}> 
                        {car.year} {car.model} {car.maker}
                    </li>)
                }

            </ul>

            <input type="number" value={carYear} onChange={handleYearCar}/> <br />
            <input type="text" value={carModel} placeholder='Enter model' onChange={handleModelCar}/> <br />
            <input type="text" value={carMaker} placeholder='Enter Maker' onChange={handleMakerCar}/> <br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )

}
export default ArrayObject;