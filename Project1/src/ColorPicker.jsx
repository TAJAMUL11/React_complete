import React, {useState} from 'react';
function ColorPicker(){
    const [color, setColor] = useState('#ffffff');
    function handleColorChange(e){
        setColor(e.target.value);
    }
    return(
        <div className="color_container">
            <h3>Color Picker</h3>
            <div className="displayColor" style = {{backgroundColor : color}}>
            <h4>Current Color : {color}</h4>
            </div>
            
            <label className='labelforColor'>
                Select a color
                <input type="color" value = {color} onChange = {handleColorChange} />
            </label>
        </div>
        
    );
}
export default ColorPicker;
