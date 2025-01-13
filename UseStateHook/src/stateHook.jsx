import {useState} from 'react';
function StateHook(){
    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployed] = useState(false);
    const updateName = () => {
        setName("Tajamul");
    }
    const updateAge = () => {
        setAge(age + 1);
        
    }
    const updateStatus = () => {
        setEmployed(!isEmployed);
       
    }

    return(
        <div className = 'container'>
            <p>Name : {name}</p>
            <button className="btn" onClick = {updateName}>Set Name</button>
            <p>age : {age}</p>
            <button className="btn" onClick = {updateAge}>Set Age</button>
            <p>Employed : {isEmployed ? "Yes" : "No"}</p>
            <button className="btn" onClick = {updateStatus}>Set Status</button>

        </div>
    );


}
export default StateHook;