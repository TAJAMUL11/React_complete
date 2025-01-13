import {useState} from 'react';
function OnChange(){
    const [inputValue, setInput] = useState('Bob');
    const [textAreaValue, setTextArea] = useState('');
    const [selectValue, setSelect] = useState('');
    const [radioValue, setRadio] = useState('None');
    const inputChange = (e) =>{
        setInput(e.target.value);
    }
    const textAreaChange = (e) =>{
        setTextArea(e.target.value);
    }
    const selectChange = (e) =>{
        setSelect(e.target.value);
    }
    const radioChange = (e) =>{
        setRadio(e.target.value);
    }
    return(
        <div>
            <label> Enter Name 
            <input type="text" onChange = {inputChange} value = {inputValue}/>
            </label>
            <p>input Value : {inputValue}</p>

            <h3>Delivery details</h3>
            <textarea  onChange = {textAreaChange} placeholder='Enter Comments'/>
            <p>Delivery Details : {textAreaValue}</p>
            
            <select value = {selectValue} onChange={selectChange}>
                <option value="">Choose Payment method</option>
                <option value="Visa">Visa</option>
                <option value="RazorPay">RazorPay</option>
                <option value="MasterCard">MasterCard</option>

            </select>
            <p>Payment Mode : {selectValue}</p>

            <label>
                <input type="radio" onChange = {radioChange} value= "Delivery" checked  = {radioValue ==="Delivery"}/>
                Delivery
            </label> <br />
            <label>
                <input type="radio" onChange = {radioChange} value= "PickUp"checked  = {radioValue ==="PickUp"} />
                PickUp
            </label>
            <p>You choose : {radioValue}</p>


        </div>
    );
}
export default OnChange;